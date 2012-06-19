/**
	@author Sapient
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
	function APP () {

		//We organize our instance of views, models and collections
		this.views = {};
		this.models = {};
		this.collections = {};
	}

	// Returns a new instance of the APP namespace
	return new APP();

}(window, document, jQuery));