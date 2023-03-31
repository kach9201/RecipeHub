const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

const showButton = document.getElementById('showRecipe');

// const showRecipe = document.getElementById('showButton');
// const hiddenElement = document.getElementById('hiddenElement');

// showButton.addEventListener('click', function () {
//     hiddenElement.style.display = 'block';
// });

const mealItem = document.querySelectorAll('.meal-item');



searchBtn.addEventListener('click', getMealList);

mealList.addEventListener('click', getMealRecipe);

// recipeCloseBtn.addEventListener('click', () => {
//     mealDetailsContent.parentElement.classList.remove('showRecipe');
// });


function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.meals) {
                data.meals.forEach(meal => {
                    html += `
                    <div class="meal-item" data-id = "${meal.idMeal}" >
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="meal-name">
                        <h3 class="">${meal.strMeal}</h3>
                        <a href="${meal.showRecipe}" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
                `;

                });
                mealList.classList.remove('notfound');
            } else {
                html = "Sorry, no meal found";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}

function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {

        let mealItem = e.target.parentElement.parentElement;
        console.log(mealItem);
        console.log(mealItem.dataset.id);


        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
            .then(response => response.json())
            .then(data => mealRecipeModal(data.meals, mealItem));

    }

}
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.findAll();
        res.render('/showRecipe',);// { recipes });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error home ln 16');
    }
});




function mealRecipeModal(meal,parent) {

    meal = meal[0];
    let html = `
     <h2 class="recipe-title">${meal.strMeal}</h2>
    <p class="recipe-category">${meal.strCategory}</p>
    <div class="recipe-instruct">
    <h3>Instructions</h3>
    <p>${meal.strInstructions}</p>
</div>


`;

    parent.innerHTML += html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
    // console.log(document.querySelector(".meal - details").style.display);
    // document.querySelector('.meal-details').style.display = block;

}

