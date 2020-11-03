$( document ).ready( function() {

  $("i").click(nextPoint);


  // Funzione avanti

function nextPoint() {
  var imgAttiva = $("img.active");
  imgAttiva.removeClass("active");
  var puntoAttivo = $("i.active");
  puntoAttivo.removeClass("active");

  // se dove sono è l'ultima img allora
  if (puntoAttivo.hasClass("last") && imgAttiva.hasClass("last")){
    //torna alla prima img
    $("i.first").addClass("active");
    $("img.first").addClass("active");
  } else {// altrimenti
    //fai diventare attiva l'immagine successiva
    puntoAttivo.next("i").addClass("active");
    imgAttiva.next("img").addClass("active");
    }
  }
});

// Funzione indietro
  function prevImg() {
    var imgAttiva = $("img.active");
    imgAttiva.removeClass("active");
    var puntoAttivo = $("i.active");
    puntoAttivo.removeClass("active");

    // se dove sono è la prima img allora
    if (imgAttiva.hasClass("first")){
      //torna all'ultima img/pallino
      $("img.last").addClass("active");
      $("i.last").addClass("active");
    } else { // altrimenti
      //fai diventare attiva l'immagine/pallino precedente
      imgAttiva.prev("img").addClass("active");
      puntoAttivo.prev("i").addClass("active");
    };
  };
