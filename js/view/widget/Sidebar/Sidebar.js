define([
	'jquery',
	'underscore',
	'backbone'
], function($,_,Backbone){

	return Backbone.View.extend({

		el: '#sidebar',

		rendered: false,

		initialize: function(){
			var collection = new Backbone.Collection();
			this.collection = collection;
		},

		add: function(widget){
			this.collection.add(widget);
			if(this.rendered) this.addInHtml(widget);
		},

		addInHtml: function(item){
			item = item.attributes;

			var id = item.name || item.cid;

			this.$el.append('<div id="'+id+'" class="sidebar-widget"></div>');

			item.$el = this.$("#"+id);
			item.render();
		},

		render: function(){

			var _then = this;

			this.collection.each(function(item){
				_then.addInHtml(item);
			});
		}


	});

});