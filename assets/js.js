

//starting point

$(document).ready(function () {

// array of animals 

    

    //api = 51F88Xv6lOpuuIQeThwTlrtlgmsUSbmY
    
    $("#submit").on("click",function displayGif() {
        event.preventDefault()
        $("#showHere").empty()

        var animals = $("#searchAnimal").val();
  
  
        var queryURL = "http://api.giphy.com/v1/gifs/search?apikey=51F88Xv6lOpuuIQeThwTlrtlgmsUSbmY&q="+animals+"&limit=10";
        
        console.log(animals)
        $.ajax({
          url: queryURL,
          method: "GET",
        })
        .then(function (response) {
        console.log(response)
          for(var i = 0; i<response.data.length;i++){
              var gif = $("<img src='"+response.data[i].images.fixed_height.url+"'>")
              $("#showHere").append(gif)
          }
          
        })
        .catch(function(err){
          console.log(err)
        })
      })

    // buttons
    var animals = ["ant", "dog", "cat","hamster","shark"]
    function renderButtons() {
      
      // Deleting the buttons prior to adding new movies
      // (this is necessary otherwise you will have repeat buttons)
      $("animalBtn").empty();

      // Looping through the array of movies
      for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class of movie to our button
        a.addClass("animals");
        // Adding a data-attribute
        a.attr("data-name", animals[i]);
        // Providing the initial button text
        a.text(animals[i]);
        // Adding the button to the buttons-view div
        $("#animalBtn").append(a);
      }
    }

    // // This function handles events where one button is clicked
    // $("#animalBtn").on("click", function(event) {
    //   event.preventDefault();

    //   // This line grabs the input from the textbox
    //   // The movie from the textbox is then added to our array
    //   animals.push(animals);

    //   // Calling renderButtons which handles the processing of our movie array
    //   renderButtons();

    // });

    // // Generic function for displaying the movieInfo
    $(document).on("click", ".animals", displayGif);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();

})
