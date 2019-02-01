$(function() {
  'use strict';
  
  var _smoothstate = $('#site').smoothState({ debug: true });
  
  $(document).keydown(function(e) {
    switch(e.which) {
        case 191:
          // ?
          $("#PageNavigation").toggle();
          break;    
        case 38:
          // up
          if (window.location.pathname != "/") {
            $('#homeButton').click();
          }
          break;
        case 37:
          // left
          $('#nextButton').click();
          break;
        case 39: 
          // right
          $('#prevButton').click();
          break;
        case 40:
          // down
          break;
        default: return;
    }
    e.preventDefault();
});
  
});
