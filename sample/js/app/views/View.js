/**
	@author alvincrespo
	@description Generic View Class for TODO
*/
var TODO = window.TODO || {};

TODO.View = Backbone.View.extend({
	// The views classname
	'className': 'default',

	// Events delegated to the view
	//ADJUSTMENT
	//We now have specific events for each action to be taken
	'events': {
		'click header a': 'removeList',
		'click .todo-add': 'addItem',
		'click .todo-remove': 'removeItem',
		'keydown span': 'handleKeyDown'
	},
	
	/**
		@function
		@description Fires after every instance intialization.
	*/
	'initialize': function() {
		this.$el.addClass('app-view-' + this.className);

		//ADJUSTMENT
		// Since there will be various lists on the page, and we may want to 
		// tie into a specific one later on, we should create a specific class for each,
		// lets use the cid of the view to distinguish
		this.$el.addClass('app-view-' + this.className + "-" + this.cid);
	},

	/**
		@function
		@description Included by Backbone, this method is to be used on render of the view.
	*/
	'render': function () {

	},

	/**
		@function
		@description Removes the List
	*/
	'removeList': function () {
		alert("Remove this list.");
	},

	/**
		@function
		@description Adds an Item to the list.
	*/
	'addItem': function () {
		alert("Add an Item");
	},

	'removeItem': function () {
		alert("Remove this Item");
	},

	/**
		@event
		@description Handles the key down event on a contenteditable element
		@param {Event} e
	*/
	'handleKeyDown': function (e) {
		var ele = e.target;

		switch(e.which) {
			case 27:
				//document.execCommand('undo');
			    el.blur();
				break;
			case 13:
				ele.blur();
				console.log("Update");
				e.preventDefault();
				break;
			default:
				break;
		}

	}

});