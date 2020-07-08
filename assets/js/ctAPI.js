var responseData;
var responseDataArr = [];
var searchInput = document.getElementById("drink-search");
var drinkForm = document.querySelector(".entry");
var searchInput = document.getElementById("drink-search").value //This will need to be modified to match html page
        // ID Ingredients
    var ingredients = document.getElementById("ingredients") //This will need to be modified to match html page
        // ID Trivia
    var trivia = document.getElementById("trivia") //This will need to be modified to match html page
        // ID Drink Pic
    var drinkPic = document.getElementById("drinkPic") //This will need to be modified to match html page
        // ID Directions
    var directions = document.getElementById("directions") //This will need to be modified to match html page
    var drinkDisplayed = searchInput;

// fetch function that grabs response and returns the data assuming it is a drink in the API DB
function fetchDrinkTest() {
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
            responseDataArr.push(data.drinks);
            console.log(responseDataArr);
            return responseDataArr[0]
            // console.log(responseDataArr);
        })
        .then(function(responseDataArr) {
            console.log(responseDataArr);
            console.log(responseDataArr[0]);
            console.log(responseDataArr[0].strDrink);

            if (responseDataArr === null || responseDataArr === undefined) {
                console.log("invalid entry");
            } else if (toUpper(searchInput.value) !== responseDataArr[0].strDrink) {
                console.log("does not exactly match");
            } else {
                console.log("valid entry");
                appendFetchData();
                // storeDrinkSearches();
            }
        });
    }

// function that takes data from fetch and pushes to page (only if the previous check function calls this function)
function appendFetchData() {
    console.log(responseDataArr);
    console.log(responseDataArr[0]);
    console.log(responseDataArr[0].strDrink);

    ingredients.textContent = "";
    drinkPic.innerHTML = responseDataArr[0].strDrinkThumb
    directions.innerHTML = responseDataArr[0].strInstructions
    drinkPic.src = responseDataArr[0].strDrinkThumb
            var ingredientsMap = [],
                measureMap = [],
                finalIngredients = {}

            Object.entries(responseDataArr[0]).forEach(([key, val]) => {
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
}

// working function original
// function fetchDrink(drink = null) {

//     // ID Search box
//     var searchInput = document.getElementById("drink-search").value //This will need to be modified to match html page
//         // ID Ingredients
//     var ingredients = document.getElementById("ingredients") //This will need to be modified to match html page
//         // ID Trivia
//     var trivia = document.getElementById("trivia") //This will need to be modified to match html page
//         // ID Drink Pic
//     var drinkPic = document.getElementById("drinkPic") //This will need to be modified to match html page
//         // ID Directions
//     var directions = document.getElementById("directions") //This will need to be modified to match html page
//         // ADD BUTTON ID to drink-search

//     var drinkDisplayed = searchInput;
//     ingredients.textContent = "";
//     console.log({ drink, drinkDisplayed });
//     console.trace(drink); // "Trace" shows where a variable came from.
//     var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchInput.value;
//     // console.log(url);

//     fetch(url)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             responseData = data
//             responseDataArr.push(data.drinks);
//             console.log(responseDataArr);
//             return responseDataArr[0]
//             // console.log(responseDataArr);
//         })
//         .then(function(responseDataArr) {
//             console.log(responseDataArr);
//             if (responseDataArr === null || responseDataArr === undefined) {
//                 console.log("invalid entry");
//             } else if (toUpper(searchInput.value) !== responseDataArr[0].strDrink) {
//                 console.log("does not exactly match");
//             } else {
//                 console.log("valid entry");
//                 // appendFetchData();
//                 // storeDrinkSearches();
//             }
//             drinkPic.innerHTML = responseDataArr[0].strDrinkThumb
//             directions.innerHTML = data.drinks[0].strInstructions
//             drinkPic.src = data.drinks[0].strDrinkThumb
//             var ingredientsMap = [],
//                 measureMap = [],
//                 finalIngredients = {}

//             Object.entries(data.drinks[0]).forEach(([key, val]) => {
//                 // console.log(val)
//                 if (val) {
//                     if (key.startsWith("strIng")) ingredientsMap.push(val)
//                     else if (key.startsWith("strMea")) measureMap.push(val)
//                 }

//             });

//             ingredientsMap.forEach((ing, idx) => {
//                     console.log(ing)
//                     if (measureMap[idx]) finalIngredients[ing] = measureMap[idx]
//                     else finalIngredients[ing] = 'to taste'
//                 })
//                 // console.log(finalIngredients)
//             Object.entries(finalIngredients).forEach(([key, val], ind) => {
//                 ingredients.innerHTML += `<li> ${key}: ${val}</li>`
//             });
//         })
//         }



// function fetchDrink() {
//     // ID Search box
//     var searchInput = document.getElementById("drink-search").value //This will need to be modified to match html page
//         // ID Ingredients
//     var ingredients = document.getElementById("ingredients") //This will need to be modified to match html page
//         // ID Trivia
//     var trivia = document.getElementById("trivia") //This will need to be modified to match html page
//         // ID Drink Pic
//     var drinkPic = document.getElementById("drinkPic") //This will need to be modified to match html page
//         // ID Directions
//     var directions = document.getElementById("directions") //This will need to be modified to match html page
//         // ADD BUTTON ID to drink-search

//     var drinkDisplayed = searchInput;
//     ingredients.textContent = "";
//     var url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + (drink || drinkDisplayed).trim().replace(" ", "_");
//     // console.log(url);

//     fetch(url)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             return data
//         })
//             console.log(data);
//             responseData = data.drinks[0].strDrink;
//             responseDataArr.push(responseData);
//             console.log(responseData);
//             console.log(responseDataArr);
//             drinkPic.innerHTML = data.drinks[0].strDrinkThumb
//             directions.innerHTML = data.drinks[0].strInstructions
//             drinkPic.src = data.drinks[0].strDrinkThumb
//             var ingredientsMap = [],
//                 measureMap = [],
//                 finalIngredients = {}

//             Object.entries(data.drinks[0]).forEach(([key, val]) => {
//                 // console.log(val)
//                 if (val) {
//                     if (key.startsWith("strIng")) ingredientsMap.push(val)
//                     else if (key.startsWith("strMea")) measureMap.push(val)
//                 }

//             });

//             ingredientsMap.forEach((ing, idx) => {
//                     console.log(ing)
//                     if (measureMap[idx]) finalIngredients[ing] = measureMap[idx]
//                     else finalIngredients[ing] = 'to taste'
//                 })
//                 // console.log(finalIngredients)
//             Object.entries(finalIngredients).forEach(([key, val], ind) => {
//                 ingredients.innerHTML += `<li> ${key}: ${val}</li>`
//             });
//         })
// }

// document.getElementById("search-button-drink").addEventListener("click", () => fetchDrink());
drinkForm.addEventListener('submit', fetchDrinkTest);