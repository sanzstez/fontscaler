(function ( $ ) {
 
  $.fn.fontscaler = function( options ) {
 
    var settings = $.extend( true, {
      animate: {
        enable: false,
        duration: 500
      }
    }, options );

    this.each(function() {
      var text_height = $(this).height(),
          line_height = $(this).css('line-height').replace('px', ''),
          text_lines = Math.round(text_height / line_height);

      var font_size = 14;
      
      if( text_lines >= 0 && text_lines <= 3 ) {
        font_size = 20;
      } 
      else if( text_lines > 3 && text_lines <= 5 ) {
        font_size = 18;
      } 
      else if( text_lines > 5 && text_lines <= 7 ) {
        font_size = 17;
      }
      else if( text_lines > 7 && text_lines <= 9) {
        font_size = 16;
      }

      $(this).css('font-size', font_size + 'px');

      if ( settings.animate.enable ) {
        $(this).css('transition', 'font-size ' + settings.animate.duration + 'ms ease');
      }

    });
 
    return this;
  };
 
}( jQuery ));