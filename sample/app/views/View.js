/**
	@author alvincrespo
	@description Generic View Class for App
*/

APP.View = Backbone.View.extend({
	// The views classname
	'className': 'default',

	// Events delegated to the view
	'events': {
		'click a': 'handleClickEvt'
	},
	
	/**
		@function
		@description Fires after every instance intialization.
	*/
	'initialize': function() {
		this.$el.addClass('app-view-' + this.className);
	},

	/**
		@function
		@description Included by Backbone, this method is to be used on render of the view.
	*/
	'render': function () {

	},

	'handleClickEvt': function(e) {
		alert("Handled Click Event");
	}

});