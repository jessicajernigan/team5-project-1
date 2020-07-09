var searchInput = document.getElementById("drink-search");
var drinkForm = document.querySelector(".entry");
var drinkDisplayed = document.getElementById('cocktail-name-main');
var drinksArray = JSON.parse(localStorage.getItem("drinks")) || [];
var clearStoredDrinksEl = document.getElementById("clear-btn");

// Function that forces upper case on first letter of displayed drink name - works for multiple word drinks
function toUpper(drink) {
  return drink
      .toLowerCase()
      .split(' ')
      .map(function(word) {
          return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
   }

function storeDrinkSearches(event) {
  event.preventDefault();
  var searchTerm = toUpper(searchInput.value)
  hideQuoteShowContent();
  drinkDisplayed.innerHTML = searchTerm;
  if (drinksArray.indexOf(searchTerm) === -1) {
    drinksArray.push(searchTerm);
    localStorage.setItem("drinks", JSON.stringify(drinksArray));
    // console.log(drinksArray);
    
    var previousSearches = document.getElementById('previous-searches');
    var newBtn = document.createElement("button");
    newBtn.setAttribute("value", searchTerm);
    newBtn.onclick = function(event) {
      event.preventDefault();
      console.log("first");
      // var drink = event.target.textContent;
      var drink = $(this).attr("value");
      hideQuoteShowContent();
      drinkDisplayed.innerHTML = drink;
      fetchDrink(drink);
      getVideoBtn(drink);
      // console.log("Here's 'drink' when I click a button: ", drink);
    }

    if (localStorage.getItem(drinksArray) == searchTerm) {
      console.log("drink already searched")
  } else {
      previousSearches.appendChild(newBtn);
      newBtn.classList = "recent-search-terms";
      hideQuoteShowContent();
      newBtn.innerHTML = toUpper(searchTerm);
    clearButtonDisplay();
  }
    
    // console.log("This is the searchInput.value: ", searchInput.value);
    searchInput.value = "";
    // console.log("Now this is the searchInput.value after I've cleared it: ", searchInput.value);
    // console.log("Here's the searchTerm: ", searchTerm);
;  }
}


function searchClicked(drink) {
  fetchDrink(drink);
  getVideo(drink);
  clearButtonDisplay();
};


function displayStoredDrinks() {
    for (var i = 0; i < drinksArray.length; i++) {
      var previousSearches = document.getElementById('previous-searches'); 
      var newBtn = document.createElement("button");

      newBtn.onclick = function (event) {
        var drink = event.target.textContent;
        console.log("second");
        fetchDrink(drink);
        getVideoBtn(drink);
        drinkDisplayed.innerHTML = toUpper(drink);
        hideQuoteShowContent();
        clearButtonDisplay();
        // console.log("Here's the 'drink' value when I click a button that loaded on the page: ", drink);
      }
      previousSearches.appendChild(newBtn);
      newBtn.classList = "recent-search-terms";
      // hideQuoteShowContent();
      newBtn.innerHTML = toUpper(drinksArray[i]);
      clearButtonDisplay();
    }
  }

// 'Clear Recent Searches' button functionality
function clearStoredDrinks() {
    if (localStorage.getItem("drinks")) {
      localStorage.clear();
      location.reload();
    } else {
      console.log("nothing in storage");
    }
}

// This function hides the 'Clear Recent Searches' when local storage is empty
function clearButtonDisplay() {
  if (localStorage.getItem("drinks")) {
    document.getElementById("clear-btn").style.display = "inline-block";
  } else {
    console.log("clear button hidden");
  }
}

// Event Listener
drinkForm.addEventListener('submit', storeDrinkSearches);
clearStoredDrinksEl.addEventListener('click', clearStoredDrinks);
displayStoredDrinks();
clearButtonDisplay();