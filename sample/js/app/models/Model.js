/**
	@author alvincrespo
	@description Generic Model Class for TODO
*/
var TODO = window.TODO || {};

TODO.Model = Backbone.Model.extend({

	'defaults': {
		//ADJUSTMENT
		//Sample attribute of Model
		'text': 'Todo Text Value'
	},
	
	/**
		@function
		@description Fires after every instance intialization.
	*/
	'intitialize': function() {

	}

});