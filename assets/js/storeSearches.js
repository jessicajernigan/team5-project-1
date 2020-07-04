var searchInput = document.getElementById("drink-search");
var drinkForm = document.querySelector(".entry");
var drinkDisplayed = document.getElementById('cocktail-name-main');
var drinksArray = JSON.parse(localStorage.getItem("drinks")) || [];



function storeSearch(event) {
  event.preventDefault();

  var searchTerm = searchInput.value.trim();

  if (drinksArray.indexOf(searchTerm) === -1) {
    drinksArray.push(searchTerm);
    drinkDisplayed.innerHTML = searchTerm;
    localStorage.setItem("drinks", JSON.stringify(drinksArray));
    console.log(drinksArray);
    console.log(searchInput.value)

    searchInput.value = "";


    
  }
}

  //   var previousSearches = document.getElementById('previous-searches'); // Identifies the container for the "city buttons" as a variable.
  //   var newBtn = document.createElement("button");
  //   newBtn.setAttribute("value", currentCity);
    
  //   newBtn.onclick = function (event) {
  //     var city = $(this).attr("value"); // After setting the attribute, use jQuery to target said attribute. 
  //     console.log(city);
  //     displayCurrentWeather(city);
  //   }
  //   previousSearches.appendChild(newBtn);
  //   newBtn.classList = "btn btn-outline-primary btn-lg btn-block city-btn";
  //   newBtn.setAttribute("id", "city-" + currentCity)
  //   newBtn.innerHTML = currentCity;
  // }
  // cityInputField.value = "";


// Event Listener
drinkForm.addEventListener('submit', storeSearch);