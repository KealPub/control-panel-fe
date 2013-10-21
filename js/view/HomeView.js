define([
	'backbone',
	'resource/MainView',
	'text!templates/homeTemplate.html'
], function(Backbone, MainView, homeTemplate){
	return MainView.extend({

		template: homeTemplate

	});
});