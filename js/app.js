define([
	'backbone',
	'router',
	'resource/Socket',
	'global'
], function(Backbone, Router, Socket, Global){

	var initialize = function(){
		Socket.start();
		Router.initialize();
	}

	return {
		initialize: initialize
	}

});