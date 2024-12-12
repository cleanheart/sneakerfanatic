window.theme = window.theme || {};
(function ($) {
  "use strict";
  var Thm  = {
    init: function () {
      this.Basic.init();
    },

    Basic: {
      init: function () {
        this.smoothScroll();
      },

      smoothScroll: function () {
        $('a[href*="#"]')
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function (event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $(".menu-drawer-container").removeAttr("open");
                $(".menu-drawer-container summary").attr(
                  "aria-expanded",
                  false
                );
                $("body").removeClass("overflow-hidden-tablet");
                $("html, body").animate(
                  {
                    scrollTop: target.offset().top,
                  },
                  600,
                  function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                      // Checking if the target was focused
                      return false;
                    } else {
                      $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                      $target.focus(); // Set focus again
                    }
                  }
                );
              }
            }
          });
      }
    },
  };

  jQuery(document).ready(function () {
    Thm.init();
  });
})(jQuery);
