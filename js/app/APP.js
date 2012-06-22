/**
	@author alvincrespo
	@description APP class maintains our backbone application under one namespace.
*/

/**
	@namespace
*/
var APP = window.APP || {};

APP = (function(win, doc, $) {

	var defaults = {};

	/**
		@constructor
	*/
	function APP (options) {

		//We organize our instance of views, models and collections
		this.views = {};
		this.models = {};
		this.collections = {};

		this.options = $.extend({}, defaults, options, true);

		this.init();
	}

	APP.prototype.init = function () {

	}

	// Returns a new instance of the APP namespace
	return new APP();

}(window, document, jQuery));