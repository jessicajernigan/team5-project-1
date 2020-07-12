// FUNCTIONS TO EMBED A YOUTUBE VIDEO - NEEDS TO BE LINKED TO THE SEARCH TERM
var drinkInput = document.getElementById('drink-search');
var drinkForm = document.querySelector(".entry");
var drinkSearch = drinkInput.value;
var videoContainer = document.getElementById("youtube");

// Function to push input drink search
function pushDrink(e) {
    e.preventDefault();
    getVideo();
}

// Function that takes in drink search and gets YouTube video
function getVideo(drink = null) {
    videoContainer.style.display = "none";
    $(videoContainer).empty()
    var drinkSearch = drinkInput.value;
    console.log("YOUTUBE API CALL");
    $.ajax({
      type: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
          key: 'AIzaSyD4-o_Z0ZCDzl4kzTrKCjueFjiMqFk7Cdc',

          // q: "how to make the best " + typeof drink === "string" ? drink : drinkSearch + " cocktail", // "If 'drink' is a string, use it; if it's not, use 'drinkSearch' instead."

          q: "how to make the best " + searchInput.value + " cocktail", // "If 'drink' is a string, use it; if it's not, use 'drinkSearch' instead."

          part: 'snippet',
          maxResults: 1,
          type: 'video',
          videoEmbeddable: true,
          allowFullScreen: true,
      },
      success: function(data){
          embedVideo(data)

        //   console.log(data);

      },
      error: function(response){
          console.log("Request Failed");
      }
    });
  }

// Function that takes in drink search BUTTON and gets YouTube video
function getVideoBtn() {
  videoContainer.style.display = "none";
  $(videoContainer).empty()
  var drink = event.target.textContent;
  console.log("YOUTUBE API CALL");

$.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {

        // key: 'AIzaSyD4-o_Z0ZCDzl4kzTrKCjueFjiMqFk7Cdc',
        // q: "how to make the best " + drink + " cocktail",

        key: 'AIzaSyD4-o_Z0ZCDzl4kzTrKCjueFjiMqFk7Cdc',
        q: "how to make the best " + searchInput.value + " cocktail",

        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
        allowFullScreen: true,
    },
    success: function(data){
        embedVideo(data)
      //   console.log(data);
    },
    error: function(response){
        console.log("Request Failed");
    }
  });
}

// Function that embeds YouTube video
function embedVideo(data) {
    var video = document.createElement("iframe");
    var videoTitle = document.createElement("h5");
    videoTitle.classList.add('video');
    videoTitle.textContent = data.items[0].snippet.title;
    video.setAttribute('allowFullScreen', '');
    video.setAttribute('width', '85%');
    video.setAttribute('height', '85%');
    video.src = 'https://www.youtube.com/embed/' + data.items[0].id.videoId
    videoContainer.style.display = "inline-block";
    videoContainer.appendChild(videoTitle);
    videoContainer.appendChild(video);
  }


// EVENT LISTENERS
drinkForm.addEventListener('submit', pushDrink);
