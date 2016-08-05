var MainNav = (function(){

  // Variables que se reutilizarán: referencias al DOM, variables estáticas, etc.
  var set = {
    nav_button: $('.MainNav-item')
  };

  // Método de inicialización del módulo
  var init = function() {
    events.navegacion();
  };

  var events = {};
  events.navegacion = function() {
    set.nav_button.on('click', function(){

      // Aplicamos estilos para los botones del menú
      set.nav_button.removeClass('is-active');
      $(this).addClass('is-active');

      // Llamamos al cambio de contenido
      MainContent.actualizarContenidoPrincipal();
    });
  };

  // Métodos publicos
  return {
    init: init
  };

})();
