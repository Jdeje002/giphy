

//starting point

$(document).ready(function () {



  //api = 51F88Xv6lOpuuIQeThwTlrtlgmsUSbmY

  $("#submit").on("click", function displayGif() {
    event.preventDefault()

    $("#showHere").empty()

    var animals = $("#searchAnimal").val();


    var queryURL = "http://api.giphy.com/v1/gifs/search?apikey=51F88Xv6lOpuuIQeThwTlrtlgmsUSbmY&q=" + animals + "&limit=10";

    console.log(animals)
    $.ajax({
      url: queryURL,
      method: "GET",
    })
      .then(function (response) {
        console.log(response)
        for (var i = 0; i < response.data.length; i++) {
          var gif = $("<img src='" + response.data[i].images.fixed_height.url + "'>")
          $("#showHere").append(gif)
        }

      })
      .catch(function (err) {
        console.log(err)
      })
  })

  // buttons
  //arr of animals
  var animals = ["ant", "dog", "cat", "hamster", "shark"]

  renderButtons();
  function renderButtons() {

    $("#animalBtn").empty();

    // Looping through the array of animals
    for (var i = 0; i < animals.length; i++) {
      var a = $("<button id = 'animal_Button'><br>");

      a.addClass("btn animals");

      a.attr("data-name", animals[i]);

      a.text(animals[i]);

      $("#animalBtn").append(a);
    }
    
    $("#submit").on("click", function () {
      event.preventDefault()
      var animalSearch = $("#searchAnimal").val().trim();

      animals.push(animalSearch);

      renderButtons();
    })
    $('.animals').on('click', function(){
      //
    })
  }
})
