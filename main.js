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

  selectMusic();

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

function selectMusic() {
  $("#slct_music").change(
    function(){
      var valueSelect = $(this).val();
      if (valueSelect == "0") {
        $(".cd").show();
      } else {
        $(".cd").hide();
        $(".cd[data-genere='"+valueSelect+"']").show();
      }
    }
  );
}
