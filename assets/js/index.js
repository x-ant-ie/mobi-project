
/* COUNTER */
 
$(document).ready(function($) {
    //Check if an element was in a screen
    function isScrolledIntoView(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom));
    }
    //Count up code
    
    function countUp() {
        $('.counter').each(function() {
          var $this = $(this), // <- Don't touch this variable. It's pure magic.
              countTo = $this.attr('data-count');
              ended = $this.attr('ended');

        if ( ended != "true" && isScrolledIntoView($this) ) {
            $({ countNum: $this.text()}).animate({
            countNum: countTo
          },
          {
            duration: 2500, //duration of counting
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum).append('+');
            }
          });
        $this.attr('ended', 'true');
        }
        });
    }
    //Start animation on page-load
    if ( isScrolledIntoView(".counter") ) {
        countUp();
    }
    //Start animation on screen
    $(document).scroll(function() {
        if ( isScrolledIntoView(".counter") ) {
            countUp();
        }
    });
});




      /*  MENU */
        
      function myFunction(x) {
        x.classList.toggle("change");
      }

      function openNav() {
      document.getElementById("myNav").style.display ="block";
      document.getElementById("myNav").style.height = "50%";

      }

      function closeNav() {
      document.getElementById("myNav").style.height = "0%";

      }


      /* CODE FOR PROGRESS BAR */


        window.onscroll = function() {move()};

        var i = 0;
        function move() {
          if (i == 0) {
            i = 1;
            var elem = document.getElementById("myBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 60) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
          }
        }