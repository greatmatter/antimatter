(function ($, Drupal, drupalSettings) {
  'use strict';

  Drupal.behaviors.antimatter = {
    attach: function (context, settings) {
      $('a').once('newWindowLinking').each(function() {
        try {
          var currentUrl = new URL(window.location).origin;
          var linkUrl = new URL($(this).attr('href')).origin;
          if(currentUrl != linkUrl) {
            $(this).addClass('newWindow');
          }
        }
        catch (err) {
          // Do nothing.
        }
      });

      $('a').once('newWindowBinding').click(function(e) {
        if($(this).hasClass('newWindow')) {
          e.preventDefault();
          window.open($(this).attr('href'));
        }
      });

      // Add Parallax
      $('.parallax').jarallax({
          speed: 0.2
      });
    }
  };
})(jQuery, Drupal, drupalSettings);
