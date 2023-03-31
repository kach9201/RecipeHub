const express = require('express');
const router = express.Router();
const recipes = require('../apiRoutes'); // Load the data from the seeds file

// Define routes here
router.get('/', (req, res) => {
  res.render('recipe', { recipes }); // Pass the data to the home handlebars template
});

router.get('/', async (req, res) => {
  try {
    const recipes = await new Recipe.findAll();
    res.render('/recipe',);// { recipes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error home ln 16');
  }
});




router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('recipe', {
      recipes,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;

// const express = require('express');
// const { Connection } = require('pg');
// const router = require('express').Router();
// const { Recipe } = require('../../models');
// const { Sequelize } = require('../../config/connection');
// const withAuth = require('../../utils/helpers');



// // Get all recipes

// router.get('/', async (req, res) => {
//   try {
//     // const recipes = await Recipe.findAll();
//     res.render('recipe',);// { recipes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error home ln 16');
//   }
// });

// // Get a single recipe by ID

// router.get('/:id', async (req, res) => {
//   try {
//     // const recipe = await recipe.findByPk(req.params.id);
//     if (recipe) {
//       res.render('recipe', { recipe });
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error for ln32');
//   }
// });

// // Create a new recipe

// router.post('/', async (req, res) => {
//   try {
//     const newRecipe = await recipe.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     res.status(200).json(newRecipe);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error ln 47');
//   }
// });


// // Update a recipe

// router.put('/:id', async (req, res) => {
//   try {
//     const recipe = await recipe.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (recipe) {
//       res.status(200).json(recipe);
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error ln 68');
//   }
// });

// // Delete a recipe

// router.delete('/:id', async (req, res) => {
//   try {
//     const recipe = await recipe.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     if (recipe) {
//       res.status(200).json(recipe);
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error ln88');
//   }
// });

// module.exports = router;





// router.get('/recipe', (req, res) => {
//   router.get('/', async (req, res) => {
//     try {
//         const recipes = await recipe.findAll();
//        res.render('home', { recipes });
//       } catch (error) {
//         console.error(error);
//         res.status(500).send('Server error');
//        }
//      });
// });

// router.post('/recipe', (req, res) => {
//   // Handle POST request for recipes
// });

// module.exports = router;
// const express = require('express');
// const router = express.Router();
// const recipe = require('../../models/recipe');



// // Get a single recipe by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const recipe = await Recipe.findByPk(req.params.id);
//     if (recipe) {
//       res.render('recipe', { recipe });
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Create a new recipe
// router.post('/', async (req, res) => {
//   try {
//     const { name, description, ingredients, instructions, image } = req.body;
//     const recipe = await Recipe.create({
//       name,
//       description,
//       ingredients,
//       instructions,
//       image
//     });
//     res.redirect(`/recipes/${recipe.id}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Update a recipe by ID
// router.put('/:id', async (req, res) => {
//   try {
//     const { name, description, ingredients, instructions, image } = req.body;
//     const recipe = await Recipe.findByPk(req.params.id);
//     if (recipe) {
//       recipe.name = name;
//       recipe.description = description;
//       recipe.ingredients = ingredients;
//       recipe.instructions = instructions;
//       recipe.image = image;
//       await recipe.save();
//       res.redirect(`/recipes/${recipe.id}`);
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// // Delete a recipe by ID
// router.delete('/:id', async (req, res) => {
//   try {
//     const recipe = await Recipe.findByPk(req.params.id);
//     if (recipe) {
//       await recipe.destroy();
//       res.redirect('/recipes');
//     } else {
//       res.status(404).send('Recipe not found');
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server error');
//   }
// });

// module.exports = recipeRoutes;
