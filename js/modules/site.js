var Site = (function($){

  // DOM using jQuery
  var dom = {};
  var catchDom = function(){};

  // Eventos que tendrá cada elemento
  var suscribeEvents = function() {};


  /**
   * Objeto que guarda métodos que se van a usar en cada evento definido en
   * 'suscribeEvents'
   */
  var events = {};
  events.backgroundSlide = function() {
    $.backstretch([
      "img/background-images/bg-1.jpg",
      "img/background-images/bg-2.jpg",
      "img/background-images/bg-3.jpg",
      "img/background-images/bg-4.jpg",
      "img/background-images/bg-5.jpg",
      "img/background-images/bg-6.jpg"
    ], {duration: 3000, fade: 750});
  };

  events.addComments = function() {
    console.log("ok");
  };

  events.readRanking = function() {
		var tabla_posiciones = $('.Ranking table');

		var spreadsheetID = "11bmjb6NXlI_zZ6CRRkbguTwLkHA_jtSN6voqMXXKT9E";

	 // Make sure it is public or set to Anyone with link can view
	 var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
	 var row_template;
   var url_logo;

	 $.getJSON(url, function(data) {
	  var entry = data.feed.entry;

	  $(entry).each(function(){

      switch (this.gsx$raza.$t) {
        case 'terran':
          url_logo = 'http://juancahuana.com/starcraft-app/img/logo-terran.png';
          break;
        case 'zerg':
          url_logo = 'http://juancahuana.com/starcraft-app/img/logo-zerg.png';
          break;
        case 'protoss':
          url_logo = 'http://juancahuana.com/starcraft-app/img/logo-protoss.png';
          break;
        default:
          url_logo = null;
      }
      if (url_logo !== null) {
        row_template = '<tr><td>'+ this.gsx$posicion.$t +'</td><td>'+ this.gsx$jugador.$t +'</td><td><img class="logo-raza" src="'+url_logo+'"/></td></tr>';
      } else {
        row_template = '<tr><td>'+ this.gsx$posicion.$t +'</td><td>'+ this.gsx$jugador.$t +'</td><td></td></tr>';
      }
			tabla_posiciones.append(row_template);
	  });

	 });
  };

  // Función que inicializará las funciones descritas anteriormente
  var initialize = function() {
    catchDom();
    suscribeEvents();
    events.backgroundSlide();
    events.readRanking();
    events.addComments();

  };

  /**
   * Retorna uin objeto literal con el método de inicialización principal,
   */
  return {
    init: initialize
  };

})(jQuery);
