$(document).ready(function() {

  $.ajax(
    {
      "url" : "https://flynn.boolean.careers/exercises/api/array/music",
      "method" : "GET",
      "success" : function (data, status) {
        var musicList = data.response;
        renderMusic(musicList);
      },
      "error" : function (request, status, errors) {
        alert("Errore.");
      }
    }
  );

});

function renderMusic(mscLst) {
  var source = $("#div_music_cd").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < mscLst.length; i++) {
    var music = mscLst[i];
    var visual = template(music);

    $(".cds-container").append(visual);
  }
}


//
// "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
// "title": "New Jersey",
// "author": "Bon Jovi",
// "genre": "Rock",
// "year": "1988"
