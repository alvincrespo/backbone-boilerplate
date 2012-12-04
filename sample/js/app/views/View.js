/**
	@author alvincrespo
	@description Generic View Class for TODO
*/
var TODO = window.TODO || {};

TODO.View = Backbone.View.extend({
	// The views classname
	'className': 'default',

	// Events delegated to the view
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
		this.$el.addClass('app-view-' + this.className + ' app-view-' + this.className + "-" + this.cid);
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
	'removeList': function (e) {
		e.preventDefault();

		$(e.target).closest('.todo-list').remove();
	},

	/**
		@function
		@description Adds an Item to the list.
	*/
	'addItem': function (e) {
		e.preventDefault();

		var $todoListItem = $('<li />', {
			'class': 'todo-item',
			'html': '<span contenteditable>Bananas</span><a class="todo-remove" href="#REMOVE-TODO">Remove</a>'
		});

		this.$el.find('ul').append($todoListItem);
	},

	'removeItem': function (e) {
		e.preventDefault();

		$(e.target).parent().remove();
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