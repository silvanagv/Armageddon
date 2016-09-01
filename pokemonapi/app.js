console.log("App.js is running");

$('button').click(function(){
  var pokeName = $('input').val().toLowerCase();
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/'+pokeName,
    method: 'GET',
    success: function(response){
      console.log('JSON object from server', response);
      var name = response.name,
          fd   = response.sprites.front_default;

      $('.result #pokemonName').text(name);
      $('.result #pokemonFrontDefault').attr('src', fd);
    }
  })
})
