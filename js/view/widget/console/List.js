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
			if(!model.get('time')) return;
		 	
		 	var scrolling;
		 	if((this.$el.scrollTop() + this.$el.height()) == this.$el[0].scrollHeight) scrolling = true;

		 	this.$el.append(this.template(model.toJSON()));

		 	if(scrolling)
		 	this.$el.animate({scrollTop: this.$el[0].scrollHeight}, 300);
		},

		addAll: function(){
			var _then = this;

			this.collection.forEach(function(item){
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