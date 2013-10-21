define([
	'backbone',
	'models/consoleMessage'
], function(Backbone, ConsoleModelMessage){
	var collection = Backbone.Collection.extend({

		model: ConsoleModelMessage,

	});

	return new collection();
});