define([
	'jquery',
	'underscore',
	'backbone'
], function($,_,Backbone){

	return Backbone.View.extend({

		el: '#sidebar',

		collection: new Backbone.Collection.extend({}),

		rendered: false,

		initialize: function(){

		},

		add: function(widget){
			this.collection.add(widget);
		},




	});

});