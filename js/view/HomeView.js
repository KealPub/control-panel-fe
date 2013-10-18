define([
	'backbone',
	'resource/MainView',
	'text!templates/homeTemplate.html'
], function(Backbone, MainView, homeTemplate){
	return MainView.extend({

		render: function(){
			this.$el.html(homeTemplate);
		}

	});
});