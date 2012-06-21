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
	function TODO () {
		var $todoLists = $('.todo-list'),
			that = this;

		//We organize our instance of views, models and collections
		this.views = {};
		this.models = {};
		this.collections = {};

		//Lets create a TodoItem that extends our Base TODO.Model class
	    this.models.TodoItem = new win.TODO.Model({
	      'classname': 'todo'
	    });

	    //While, we're at it, create a TodoItemCollection to hold a collection of Items, even they are in seperate lists
	    this.collections.TodoItemCollection = new win.TODO.Collection();

	    //Now find each todo list on the page and initialize a view based on each list
		_.each($todoLists, function(element, index, list) {
			that.views['TodoList_' + index] = new win.TODO.View({
		      'el': element, 
		      'className': 'todolist'
		    });
		});


	}

	// Returns a new instance of the APP namespace
	return new TODO();

}(window, document, jQuery));