;(function ($, window, document, undefined) {
	"use strict";

    var pluginName = "flyout";
    var defaults = {

    	// The color of the flyout
    	color: "Blue",

    	// The theme of the flyout
    	theme: "Light",

    	// The direction which the flyout should appear
    	direction: "right",

    	// Wether or not the flyout is visible when initialized
    	isVisible: false,

    	// Wether or not the flyout should add a close button
    	isStatic: true,


    	container: $(window)
    };

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this._init();
    }

    Plugin.prototype = {

    	_init: function() {
    		var self = this,
    		node = this.element;

    		console.log(this.show);

    		$(node).bind('myEvent', this.show());
    	},

    	show: function() {
    		$(this).show();
    	},

    	option: function(key, val) {
    		if (val) {
    			this.options[key] = val;
    		} else if (key) {
    			return this.options[key];
    		}
    	}
    };

    $[pluginName] = $.fn[pluginName] = function (options) {
    	var args = arguments,
    		returns;

    	if (!(this instanceof $)) {
    		if ($.isArray(options)) {
    			for (var i = 0; i < options.length; i += 2) {
    				$.fn[pluginName].call($(options[i]), options[i+1]);
    			}
    		} else {
    			// override the plugin defaults/options for all plugin calls globally
    			$.extend(defaults, options);
    		}
    	}

    	this.each(function () {
    		var instance = $.data(this, "plugin_" + pluginName);

    		if (typeof options === 'string' && options[0] !== '_') {
    			if (instance instanceof Plugin && typeof instance[options] === 'function') {
    				returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
    			}
    		} else {
    			$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
    		}
        });

        return returns === undefined ? this : returns;
    }
})(jQuery, window, document);