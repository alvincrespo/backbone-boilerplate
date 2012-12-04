/**
	@author alvincrespo
	@description Generic View Class for TODO
*/
var TODO = window.TODO || {};

TODO.PageView = Backbone.View.extend({
	// The views classname
	'className': 'default',

	// Events delegated to the view
	'events': {
		'click a[href="#ADD-LIST"]': 'addTodoList'
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

	'addTodoList': function() {
		var templateHTML, template;

		templateHTML = $('#todo-list-tmpl').html();

		template = _.template(templateHTML);

		$('.todo-list:last').after(template);
	}
});