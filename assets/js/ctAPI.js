var responseData;
var responseDataArr = [];
// var searchInput = document.getElementById("drink-search");
var drinkForm = document.querySelector(".entry");
var searchInput = document.getElementById("drink-search") //This will need to be modified to match html page
        // ID Ingredients
var ingredients = document.getElementById("ingredients") //This will need to be modified to match html page
        // ID Trivia
var trivia = document.getElementById("trivia") //This will need to be modified to match html page
        // ID Drink Pic
var drinkPic = document.getElementById("drinkPic") //This will need to be modified to match html page
        // ID Directions
var directions = document.getElementById("directions") //This will need to be modified to match html page
var drinkDisplayed = searchInput;
var errorDisplayContainer = document.getElementById("input-search");

// fetch function that grabs response and returns the data assuming it is a drink in the API DB
function fetchDrink() {
    var errorMsgDyn = document.getElementById("error-msg");
    $(errorMsgDyn).remove();
    responseDataArr = [];
    var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput.value;
    // console.log(searchInput.value);
    // console.log(url);
    return fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            responseData = data
            responseDataArr = data.drinks;
            if (responseDataArr === null || responseDataArr === undefined) {
                console.log("invalid entry");
                invalidEntry();
            } else if (toUpper(searchInput.value) !== responseDataArr[0].strDrink) {
                console.log("does not exactly match");
                invalidEntry();
            } else {
                // $(errorMsg).remove();
                console.log("valid entry");
                appendFetchData();
            }
        });
    }

// function that takes data from fetch and pushes to page (only if the previous check function calls this function)
function appendFetchData() {
    storeDrinkSearches();
    ingredients.textContent = "";
    drinkPic.innerHTML = responseDataArr[0].strDrinkThumb
    directions.innerHTML = responseDataArr[0].strInstructions
    drinkPic.src = responseDataArr[0].strDrinkThumb
            var ingredientsMap = [],
                measureMap = [],
                finalIngredients = {}

            Object.entries(responseDataArr[0]).forEach(([key, val]) => {
                if (val) {
                    if (key.startsWith("strIng")) ingredientsMap.push(val)
                    else if (key.startsWith("strMea")) measureMap.push(val)
                }

            });

            ingredientsMap.forEach((ing, idx) => {
                    // console.log(ing)
                    if (measureMap[idx]) finalIngredients[ing] = measureMap[idx]
                    else finalIngredients[ing] = 'to taste'
                })
                // console.log(finalIngredients)
            Object.entries(finalIngredients).forEach(([key, val], ind) => {
                ingredients.innerHTML += `<li> ${key}: ${val}</li>`
            });
}

function invalidEntry() {
    errorDisplayContainer.classList.add("error");
    var errorMsg = document.createElement("small");
    errorMsg.setAttribute("id", "error-msg");
    errorMsg.innerHTML = "drink not in database";
    errorMsg.classList.add("error");
    errorDisplayContainer.appendChild(errorMsg);
}

function removeErrorMsg() {
    $(errorMsgDyn).empty();
}

// document.getElementById("search-button-drink").addEventListener("click", () => fetchDrink());
drinkForm.addEventListener('submit', fetchDrink);