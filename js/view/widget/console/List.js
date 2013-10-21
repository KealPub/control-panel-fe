define([
	'jquery',
	'underscore',
	'backbone',
	'collections/ConsoleMessage',
	'text!templates/widget/console/message.html'
], function($,_,Backbone, ConsoleMessage, MessageTemplate){

	return Backbone.View.extend({

		collection: ConsoleMessage,

		el: '#console',

		template: _.template(MessageTemplate),

		addOne: function(model){
			 this.$el.append(this.template(model.toJSON()));
		},

		addAll: function(){
			var _then = this;

			this.collection.each(function(item){
				_then.addOne(item);
			});
		},

		bindCollectionEvent: function(){
			this.collection.unbind();

			this.collection.bind('add', this.addOne, this);
			this.collection.bind('reset', this.addAll, this);
		},

		render: function(){
			this.bindCollectionEvent();
			this.addAll();
		}

	});

});