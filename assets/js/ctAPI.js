function fetchDrink(drink = null) {

    // ID Search box
    var searchInput = document.getElementById("drink-search").value //This will need to be modified to match html page
        // ID Ingredients
    var ingredients = document.getElementById("ingredients") //This will need to be modified to match html page
        // ID Trivia
    var trivia = document.getElementById("trivia") //This will need to be modified to match html page
        // ID Drink Pic
    var drinkPic = document.getElementById("drinkPic") //This will need to be modified to match html page
        // ID Directions
    var directions = document.getElementById("directions") //This will need to be modified to match html page
        // ADD BUTTON ID to drink-search

    var drinkDisplayed = searchInput;
    ingredients.textContent = "";
    console.log({ drink, drinkDisplayed });
    console.trace(drink); // "Trace" shows where a variable came from.
    var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + (drink || drinkDisplayed).trim().replace(" ", "_");
    // console.log(url);

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            // if (data.drinks[0].strDrink === drink || data.drinks[0].strDrink === drinkQc) {
            drinkPic.innerHTML = data.drinks[0].strDrinkThumb
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
                ingredients.innerHTML += `<li> ${key}: ${val}</li>`
            });
            // } else {
            // console.log("invalid drink search");  
            // }
        })
}

document.getElementById("search-button-drink").addEventListener("click", () => fetchDrink());