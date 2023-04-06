const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const mealDetails = document.querySelector('.meal-details')

const showButton = document.getElementById('showRecipe');



const mealItem = document.querySelectorAll('.meal-item');



searchBtn.addEventListener('click', getMealList);

mealList.addEventListener('click', getMealRecipe);

mealList.addEventListener('click', saveRecipe);




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
                        <a href="/" class="recipe-btn">Get Recipe</a>
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
        console.log("From the recipe button in findmeal/js")

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
    <p id="directions">${meal.strInstructions}</p>
    <a href="/" class="save-btn">Save Recipe</a>
</div>


`;

parent.innerHTML += html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
    // console.log(document.querySelector(".meal - details").style.display);
    // document.querySelector('.meal-details').style.display = block;

}

async function saveRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('save-btn')) {
        console.log("From the save button in findmeal.js");
        // title
        const titleText = document.querySelector('.recipe-title').textContent;
        // ingredients
        const ingredientsText = document.querySelector('.recipe-category').textContent;
        // direction
        const directionsText = document.querySelector('#directions').textContent;
        const newRecipe = {
            title: titleText,
            ingredients: ingredientsText,
            directions: directionsText,
        };
        console.log(newRecipe);
        const response = await fetch('/api/recipe/create', {
            body: JSON.stringify(newRecipe),
            method: 'POST',
            headers: {
              'content-type': 'application/json',
            },
        });
        if (response.ok) {
            console.log('saveRecipe WORKED!');
        } else {
        console.log('saveRecipe screwed up again');
        }
    }
}