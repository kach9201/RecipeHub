const mealFormHandler = async(event) => {
    event.preventDefault();

    const name = document.querySelector('#search-input').value.trim();

    const searchRecipe = {
        title : name
    }

        const response = await fetch('/api/recipe', {
            body: JSON.stringify(searchRecipe),
            method: 'GET',
            headers: {
            'content-type': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data);

    }




const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const linkedinBtn = document.querySelector(".linkedin-btn");
const whatsAppBtn = document.querySelector(".whatsApp-btn");
const pinterestBtn = document.querySelector(".pinterest-btn");
