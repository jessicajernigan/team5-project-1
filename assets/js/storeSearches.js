var searchInput = document.getElementById("drink-search");
var drinkForm = document.querySelector(".entry");
var drinkDisplayed = document.getElementById('cocktail-name-main');
var drinksArray = JSON.parse(localStorage.getItem("drinks")) || [];



function storeDrinkSearches(event) {
  event.preventDefault();
  var searchTerm = searchInput.value

  if (drinksArray.indexOf(searchTerm) === -1) {
    drinksArray.push(searchTerm);
    drinkDisplayed.innerHTML = searchTerm;
    localStorage.setItem("drinks", JSON.stringify(drinksArray));
    console.log(drinksArray);

    var previousSearches = document.getElementById('previous-searches');
    var newBtn = document.createElement("button");
    newBtn.setAttribute("value", searchTerm);

    newBtn.onclick = function(event) {
      event.preventDefault();
      var drink = $(this).attr("value");
      console.log("Here's 'drink' when I click a button: ", drink);
    }

    previousSearches.appendChild(newBtn);
    newBtn.classList = "recent-search-terms";
    newBtn.innerHTML = searchTerm;

    console.log("This is the searchInput.value: ", searchInput.value);
    searchInput.value = "";
    console.log("Now this is the searchInput.value after I've cleared it: ", searchInput.value);
    console.log("Here's the searchTerm: ", searchTerm);
;  }
}


function searchClicked(drink) {
  fetchDrink(drink);
  getVideo(drink);
};


function displayStoredDrinks() {
  for (var i = 0; i < drinksArray.length; i++) {
    var previousSearches = document.getElementById('previous-searches'); 
    var newBtn = document.createElement("button");

    newBtn.onclick = function (event) {
      var drink = event.target.textContent;
      searchClicked(drink);
      drinkDisplayed.innerHTML = drink;
      console.log("Here's the 'drink' value when I click a button that loaded on the page: ", drink);
    }
    previousSearches.appendChild(newBtn);
    newBtn.classList = "recent-search-terms";
    newBtn.innerHTML = drinksArray[i];
  }
}



// Event Listener
drinkForm.addEventListener('submit', storeDrinkSearches);
displayStoredDrinks();