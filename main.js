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

  // var selectMusic = $("#slct_music option");
  // selectMusic.click(function(){
  //   var value = $(this).attr("value");
  //   if (value == "0") {
  //     console.log("All");
  //   } else if (value == "1") {
  //     console.log("Metal");
  //   } else if (value == "2") {
  //     console.log("Rock");
  //   } else if (value == "3") {
  //     console.log("Jazz");
  //   } else if (value == "4") {
  //     console.log("Pop");
  //   }
  // });

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
