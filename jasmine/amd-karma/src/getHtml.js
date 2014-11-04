// Simple AMD.
!function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
    
    $.fn.getHtml = function(options) {
        var defaults = {
          // define default options
        }

        var o = $.extend({}, defaults, options);

        var e = $(this);
        return e.html();
      };
});