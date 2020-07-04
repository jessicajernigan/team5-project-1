var searchInput = document.getElementById("drink-search");
var drinkForm = document.querySelector(".entry");
var drinkDisplayed = document.getElementById('cocktail-name-main');
var drinksArray = JSON.parse(localStorage.getItem("drinks")) || [];



function storeDrinkSearches(event) {
  event.preventDefault();

  var searchTerm = searchInput.value.trim();

  if (drinksArray.indexOf(searchTerm) === -1) {
    drinksArray.push(searchTerm);
    drinkDisplayed.innerHTML = searchTerm;
    localStorage.setItem("drinks", JSON.stringify(drinksArray));
    console.log(drinksArray);

    var previousSearches = document.getElementById('previous-searches');
    var newBtn = document.createElement("button");
    newBtn.setAttribute("value", searchTerm);

    newBtn.onclick = function(event) {
      var drink = $(this).attr("value");
      console.log(drink);
    }

    previousSearches.appendChild(newBtn);
    newBtn.classList = "recent-search-terms";
    newBtn.innerHTML = searchTerm;

    console.log(searchInput.value);
    searchInput.value = "";

  }
}


function displayStoredDrinks() {
  for (var i = 0; i < drinksArray.length; i++) {
    var previousSearches = document.getElementById('previous-searches'); 
    var newBtn = document.createElement("button");

    newBtn.onclick = function (event) {
      var drink = event.target.textContent;
      console.log(drink);
    }
    previousSearches.appendChild(newBtn);
    newBtn.classList = "recent-search-terms";
    newBtn.innerHTML = drinksArray[i];
  }
}



// Event Listener
drinkForm.addEventListener('submit', storeDrinkSearches);
displayStoredDrinks();