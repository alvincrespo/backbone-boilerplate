/**
	@author alvincrespo
	@description TODO class maintains our backbone application under one namespace.
*/

/**
	@namespace
*/
var TODO = window.TODO || {};

TODO = (function(win, doc, $) {

	var defaults = {};

	/**
		@constructor
	*/
	function TODO (options) {
		//We organize our instance of views, models and collections
		this.views = {};
		this.models = {};
		this.collections = {};

		this.options = $.extend({}, defaults, options, true);
	}

	TODO.prototype.init = function () {
	    //While, we're at it, create a TodoItemCollection to hold a collection of Items, even they are in seperate lists
	    this.collections.TodoItemCollection = new win.TODO.Collection();

		this.initViews();
		this.initModels();
	}

	TODO.prototype.initViews = function () {
		var $todoLists = $('.todo-list'), that = this;

	    //Now find each todo list on the page and initialize a view based on each list
		_.each($todoLists, function(element, index, list) {
			that.views['TodoList_' + index] = new win.TODO.View({
		      'el': element, 
		      'className': 'todolist'
		    });
		});
	}

	TODO.prototype.initModels = function () {
		var that = this;

		_.each($('.todo-item'), function(element, index, list) {
			var model;

			//Lets create a TodoItem that extends our Base TODO.Model class
			model = new win.TODO.Model({ 'text': element.getElementsByTagName('span')[0].textContent });

			$.data(element, 'todo-model' , model);

			that.collections.TodoItemCollection.add(model);
		});
	}

	// Returns a new instance of the APP namespace
	return new TODO;

}(window, document, jQuery));