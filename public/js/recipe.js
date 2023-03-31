// const express = require('express');
// const app = express();
// const recipeRouter = require('./routes/recipe');
// app.use(express.json());


class Recipe {
    constructor(title, description, ingredients, directions) {
        this.title = title;
        this.description = description;
        this.ingredients = ingredients;
        this.directions = directions;
    }

    printRecipe() {
        console.log(`Recipe: ${this.title}`);
        console.log(`Description: ${this.description}`);
        console.log(`Ingredients: ${this.ingredients}`);
        console.log(`directions: ${this.directions}`);
    }
};


// Example usage
// const myRecipe = new Recipe(
//     "Spaghetti Bolognese",
//     ["spaghetti", "ground beef", "tomato sauce", "onion", "garlic", "olive oil"],
//     "1. Cook spaghetti according to package instructions. \n2. Brown the ground beef in a large pan. \n3. Add onion and garlic, cook until softened. \n4. Add tomato sauce and bring to a simmer. \n5. Serve over spaghetti."
// );

const recipeContainer = document.querySelector('.recipe-list');
const searchForm = document.querySelector('#search-form input[type="submit"]');

searchForm.addEventListener('click', (e) => {

    e.preventDefault();
    const searchTerm = document.querySelector('#search-input').value
    console.log('Search form clicked', "searchTerm", searchTerm);
});





// router.get('/', async (req, res) => {
//     try {
//         // Get all projects and JOIN with user data
//         const recipeData = await Recipe.findAll({
//             include: [
//                 {
//                     model: Recipe,
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         // Serialize data so the template can read it
//         const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

//         // Pass serialized data and session flag into template
//         res.render('recipe', {
//             recipes,
//             logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });


// parent.innerHTML = html;
// searchForm.parentElement.classList.add('search-input');

async function getRecipes() {
    const response = await fetch("/api/recipe");
    const recipes = await response.json();
    console.log(recipes);
    response.forEach(recipe => {
        const newRecipe = new Recipe(recipe.title, recipe.description, recipe.ingredients, recipe.directions);
        recipeContainer.innerHTML += newRecipe.toHTML();
    });
}
getRecipes();

// recipeContainer.innerHTML = recipes;

recipeContainer.innerHTML = printRecipe.toHTML();

printRecipe = (recipe) => {
    recipe.printRecipe();
};


// social share links:

// WhatsApp:
// https://wa.me/text=[post-title]=[post-url]

// Facebook:
// https://www.facebook.com/sharer.php?u=[post-url]

// Twitter:
// https://twitter.com/share?url=[post-url]&text=[post-title]

// LinkedIn:
// https://www.linkedin.com/shareArticle?mini=true&url=[post-url]&title=[post-title]

// LinkedIn:
// https://www.linkedin.com/shareArticle?mini=true&url=[post-url]&title=[post-title]


const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsAppBtn = document.querySelector(".whatsApp-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");

// function init() {


//     facebookBtn.setAttribute(
//         "href",
//         ` https://www.facebook.com/login/`
//     );

//     twitterBtn.setAttribute(
//         "href",
//         ` https://twitter.com/share?url=[post-url]&text=[post-title]`
//     );

//     linkedinBtn.setAttribute(
//         "href",
//         ` https://www.linkedin.com/shareArticle?mini=true&url=[post-url]&title=[post-title]`
//     );

//     whatsAppBtn.setAttribute(
//         "href",
//         ` https://wa.me/text=[post-title]=[post-url]`
//     );

//     pinterestBtn.setAttribute(
//         "href",
//         ` https://www.pinterest.com/pin/create/button/?url=[post-url]&media=[post-img]&description=[post-title]`
//     );
// }

// init();
