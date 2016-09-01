console.log("App.js is running");

$('button').on('click', function(){

  //we want to fire our XHR request
  //need api url
  var baseUrl = 'http://pokeapi.co/api/v2/pokemon/'
  //need user input
  var pokemonName = $('input#pokemon_input').val()

//vanilla js
  // var request = new XMLHttpRequest()
  //request.open('GET', '/my/url', true)
  //jquery method to do same thing below
  $.ajax({
    url: baseUrl + pokemonName,
    method: 'GET',
    success: function(response, status){
      debugger
      var imageSrc = response.sprites.front_default
      var type = response.types[0].type.name

      var name = response.name
      $('#pokemonFrontDefault').attr('src', imageSrc);
      $('h4#pokemonName').text(name);
      $('h4#pokemonType').text(type);
      $('input#pokemon_input').val("");
      //also could do $('h4#pokemonName').text(name);
    }
  })
})
// this works too
// $('button').('click', function(){
//
// })
