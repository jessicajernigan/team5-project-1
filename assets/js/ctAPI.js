// ID Search box
var searchInput = document.getElementById("drink-search") //This will need to be modified to match html page
    // ID Ingredients
var ingredients = document.getElementById("ingredients") //This will need to be modified to match html page
    // ID Trivia
var trivia = document.getElementById("trivia") //This will need to be modified to match html page
    // ID Drink Pic
var drinkPic = document.getElementById("drinkPic") //This will need to be modified to match html page
    // ID Directions
var directions = document.getElementById("directions") //This will need to be modified to match html page


var populateSearchResults = function() {
    var drinkDisplayed = searchInput.value
    console.log(drinkDisplayed);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkDisplayed)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // console.log(data)
            directions.innerHTML = data.drinks[0].strInstructions
            drinkPic.src = data.drinks[0].strDrinkThumb
            var ingredientsMap = [],
                measureMap = [],
                finalIngredients = {}

            Object.entries(data.drinks[0]).forEach(([key, val]) => {
                // console.log(val)
                if (val) {
                    if (key.startsWith("strIng")) ingredientsMap.push(val)
                    else if (key.startsWith("strMea")) measureMap.push(val)
                }

            });

            ingredientsMap.forEach((ing, idx) => {
                    console.log(ing)
                    if (measureMap[idx]) finalIngredients[ing] = measureMap[idx]
                    else finalIngredients[ing] = 'to taste'
                })
                // console.log(finalIngredients)
            Object.entries(finalIngredients).forEach(([key, val], ind) => {
                ingredients.textContent += `${key}: ${val}\n`
            });
        })
});