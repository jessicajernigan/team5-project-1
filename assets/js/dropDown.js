var liquorSearchList = document.getElementById("liquor-search-list");
var searchInput = document.getElementById("drink-search");
var dropList = document.getElementById("drop-list");

var clickLiquor = function(drinkName) {
  if (drinkName === undefined) {
    drinkName = event.target.textContent
  }
    var url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + dropList.value;
    $(liquorSearchList).empty();
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        var newArray = [];
        for (var i = 0; i < 10; i++) {
            var idx = Math.floor(Math.random() * data.drinks.length);
            newArray.push(data.drinks[idx]);
            data.drinks.splice(idx, 1);
          }
            var list = document.createElement("ul");
            var drinkOne = document.createElement("button");
            var drinkTwo = document.createElement("button");
            var drinkThree = document.createElement("button");
            var drinkFour = document.createElement("button");
            var drinkFive = document.createElement("button");
            var drinkSix = document.createElement("button");
            var drinkSeven = document.createElement("button");
            var drinkEight = document.createElement("button");
            var drinkNine = document.createElement("button");
            var drinkTen = document.createElement("button");

            drinkOne.onclick = function (event, drinkName) {
              // event.preventDefault();
              drinkName = event.target.textContent;
            var drink = event.target.textContent;
            console.log(drinkName);
            fetchDrink(event, drinkName);
            // drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
              }

            drinkTwo.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkThree.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkFour.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkFive.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkSix.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkSeven.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkEight.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkNine.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkTen.onclick = function (event) {
            var drink = event.target.textContent;
            fetchDrink(event, drink);
            getVideoBtn(drink);
            drinkDisplayed.innerHTML = toUpper(drink);
            clearButtonDisplay();
            }

            drinkOne.textContent = newArray[0].strDrink;
            drinkOne.value = newArray[0].strDrink;
            drinkTwo.textContent = newArray[1].strDrink;
            drinkThree.textContent = newArray[2].strDrink;
            drinkFour.textContent = newArray[3].strDrink;
            drinkFive.textContent = newArray[4].strDrink;
            drinkSix.textContent = newArray[5].strDrink;
            drinkSeven.textContent = newArray[6].strDrink;
            drinkEight.textContent = newArray[7].strDrink;
            drinkNine.textContent = newArray[8].strDrink;
            drinkTen.textContent = newArray[9].strDrink;

            list.appendChild(drinkOne);
            list.appendChild(drinkTwo);
            list.appendChild(drinkThree);
            list.appendChild(drinkFour);
            list.appendChild(drinkFive);
            list.appendChild(drinkSix);
            list.appendChild(drinkSeven);
            list.appendChild(drinkEight);
            list.appendChild(drinkNine);
            list.appendChild(drinkTen);
            liquorSearchList.appendChild(list);

            drinkOne.classList.add("drinks-suggested")
            drinkTwo.classList.add("drinks-suggested")
            drinkThree.classList.add("drinks-suggested")
            drinkFour.classList.add("drinks-suggested")
            drinkFive.classList.add("drinks-suggested")
            drinkSix.classList.add("drinks-suggested")
            drinkSeven.classList.add("drinks-suggested")
            drinkEight.classList.add("drinks-suggested")
            drinkNine.classList.add("drinks-suggested")
            drinkTen.classList.add("drinks-suggested")
    }
    )}

dropList.addEventListener("change", clickLiquor);