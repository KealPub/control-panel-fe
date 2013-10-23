define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/widget/console/meta.html'
], function($,_,Backbone, metaTemplate){
	return Backbone.View.extend({

		name: "metaViewer",

		template: _.template(metaTemplate),

		initialize: function(){
			Backbone.Events.on('console_message_click', this.showMeta, this);
		},

		showMeta: function(model){

			if(model.get('meta'))
				$('#'+ this.name + ' pre').html(model.get('meta'));
			else 
				$('#'+ this.name + ' pre').html('No meta');
		},

		render: function(){
			this.$el.html(this.template());
		}

		
	});
});