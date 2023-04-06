const express = require('express');
const router = express.Router();
const recipes = require('../apiRoutes'); // Load the data from the seeds file


const { Connection } = require('pg');
// const router = require('express').Router();
const { Recipe } = require('../../models');
const { Sequelize } = require('../../config/connection');
const withAuth = require('../../utils/helpers');



// Get one recipe by name

router.get('/', async (req, res) => {
  try {
    const recipe = await Recipe.findOne({ where: { title: req.body.title } });
    // res.render('recipe',);// { recipes });
    console.log("HELLO FROM THE RECIPE GET")
    res.status(200).json(recipe)
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error home ln 16');
  }
});


// // Get a single recipe by ID

router.get('/:id', async (req, res) => {
  try {
    const recipe = await recipe.findByPk(req.params.id);
    if (recipe) {
      res.render('recipe', { recipe });
    } else {
      res.status(404).send('Recipe not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error for ln32');
  }
});

// // Create a new recipe

router.post('/', async (req, res) => {
  try {
    const newRecipe = await recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newRecipe);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error ln 47');
  }
});

// // Update a recipe
router.post('/create', async (req, res) => {
  console.log('trying to createRecipe');
  const { title, ingredients, directions } = req.body;
  if (!title || !ingredients || !directions) {
    res.status(400);
    return;
  }
  try {
    const recipeData = await Recipe.create(req.body);

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.put('/:id', async (req, res) => {
  try {
    const recipe = await recipe.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).send('Recipe not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error ln 68');
  }
});

// // Delete a recipe

router.delete('/:id', async (req, res) => {
  try {
    const recipe = await recipe.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).send('Recipe not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error ln88');
  }
});

module.exports = router;