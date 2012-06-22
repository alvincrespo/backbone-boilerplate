/**
	@author alvincrespo
	@description Generic Collection Class for TODO
*/
var TODO = window.TODO || {};

TODO.Collection = Backbone.Collection.extend({
	
	'model': TODO.Model,
	
	/**
		@function Fires after every instance intialization.
	*/
	'intitialize': function() {

	},

});