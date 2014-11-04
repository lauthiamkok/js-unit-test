// Best option/ advanced AMD.
!function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else {
        factory(root.jQuery);
    }
}(this, function($) {
    
    // Create the plugin name and defaults once
    var pluginName = 'element',
        defaults = {
            test1 : "hello",
            test2 : "world!"
        };
 
    // Constructor, initialise everything you need here
    var Plugin = function(element, options) {
        this.element   = element;
        this.options   = options;
    };
 
    // Plugin methods and shared properties
    Plugin.prototype = {
        // Reset constructor - http://goo.gl/EcWdiy
        constructor: Plugin,
 
        getHtml: function(options) {
            var e = $(options);
            return e.html();
        }
    };
 
    // Create the jQuery plugin
    $.fn[pluginName] = function(options) {
        // Do a deep copy of the options - http://goo.gl/gOSSrg
        options = $.extend(true, {}, defaults, options);
 
        return this.each(function() {
            var $this = $(this);
            // Create a new instance for each element in the matched jQuery set
            // Also save the instance so it can be accessed later to use methods/properties etc
            // e.g. 
            //    var instance = $('.element').data('plugin');
            //    instance.someMethod();
            $this.data('plugin_' + pluginName, new Plugin($this, options));
        });
    };
 
    // Expose defaults and Constructor (allowing overriding of prototype methods for example)
    $.fn[pluginName].defaults = defaults;
    $.fn[pluginName].Plugin   = Plugin;
});
