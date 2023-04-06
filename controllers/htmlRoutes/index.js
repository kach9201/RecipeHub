const router = require('express').Router();
const Recipe = require('../../models/Recipe');
// const authChecker = require('../../utils/auth.js');

router.get('/', function (req, res) {
    res.render('home', { title: 'RecipeHub', message: 'Hello!' });
});

router.get('/login', (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/');
    //     return;
    // }
    console.log('login');
    res.render('login');

    // res.render('login', {
    // logged_in: req.session.logged_in,
    // userId: req.session.user_id,
    // });
    // return;
});

router.get('/home', function (req, res) {
    res.render('home');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/recipe', (req, res) => {
    res.render('recipe');
});

// router.get('/', async (req, res) => {
//     try {
//         const recipes = await Recipe.findAll();
//         console.log(recipes);
//         res.render('recipe', { recipes }); // Pass the data to the home handlebars template
//     }
//     catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

router.get('/findMeal', function (req, res) {
    res.render('findMeal');
});


router.get('/addRecipe', function (req, res) {
    res.render('addRecipe');
});


router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('login');
});


module.exports = router;



