

//starting point

$(document).ready(function () {



  //api = 51F88Xv6lOpuuIQeThwTlrtlgmsUSbmY

  function displayGif(animals) {
    event.preventDefault()

    $("#showHere").empty()

    // var animals = $("#searchAnimal").val();


    var queryURL = "http://api.giphy.com/v1/gifs/search?apikey=51F88Xv6lOpuuIQeThwTlrtlgmsUSbmY&q=" + animals + "&limit=10";

    console.log(animals)
    $.ajax({
      url: queryURL,
      method: "GET",
    })
      .then(function (response) {
        console.log(response)

        for (var i = 0; i < response.data.length; i++) {
          var gif = $("<img src='" + response.data[i].images.fixed_height_still.url + "'>")
          gif.attr("data-still",response.data[i].images.fixed_height_still.url)
          gif.attr("data-animate",response.data[i].images.fixed_height.url)
          gif.addClass("gif")
          var rating = response.data[i].rating
          console.log(rating)
          $("#showHere").append(gif)
          $("#showHere").append("Rating: "+ rating+"")
          
          
          gif.attr("data-state","still")
          
        }
        $(".gif").on("click", function() {

          var state = $(this).attr("data-state")
          console.log(state)
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"))
            $(this).attr("data-state", "animate")
          }
          else {
            $(this).attr("src", $(this).attr("data-still"))
            $(this).attr("data-state", "still")
          }
        })

      })
      .catch(function (err) {
        console.log(err)
      })
  }

  // buttons
  //arr of animals
  var animals = ["ant", "dog", "cat", "hamster", "shark"]

  
  function renderButtons() {

    $("#animalBtn").empty();

    // Looping through the array of animals
    for (var i = 0; i < animals.length; i++) {
      var a = $("<button>");

      a.addClass("btn-animals");
      a.addClass("btn btn-primary center-block");

      a.attr("data-name", animals[i]);
      
      a.val(animals[i])

      a.text(animals[i]);

      $("#animalBtn").append(a);
    }}
    
    $("#submit").on("click", function displayGif() {
      event.preventDefault()
      var animalSearch = $("#searchAnimal").val().trim();
      animals.push(animalSearch);
      renderButtons();
    })

   console.log(animals)

    $(document).on('click',".btn-animals",function(event){
      
      event.preventDefault()
      displayGif($(this).val())
    })
    
  
  renderButtons();
})
