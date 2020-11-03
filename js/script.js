$( document ).ready( function() {

  $(".next").click(nextImg)
  $(".prev").click(prevImg);

  // FUNZIONI

  // funzione per avanti
  function nextImg() {
    //console.log("hai cliccato su next!!");

    var imgAttiva = $("img.active");

    imgAttiva.removeClass("active");

    // se dove sono è l'ultima img allora
    if (imgAttiva.hasClass("last")){
      //torna alla prima img
      $("img.first").addClass("active");
    } else {// altrimenti
      //fai diventare attiva l'immagine successiva
      imgAttiva.next("img").addClass("active");
    }
 }
 // funzione per indietro

 function prevImg() {
   var imgAttiva = $("img.active");
   imgAttiva.removeClass("active");
   if (imgAttiva.hasClass("first")){
     //torna alla prima img
     $("img.last").addClass("active");
   } else {// altrimenti
     //fai diventare attiva l'immagine successiva
     imgAttiva.prev("img").addClass("active");
   }
 }

 // funzione per tasto arrow left
 $("body").keydown(function keyNext(e)
  {
     // left arrow
    if ((e.keyCode || e.which) == 37) {
       prevImg();
     }
       // right arrow
    if ((e.keyCode || e.which) == 39) {
         nextImg();
    }
  });
});
