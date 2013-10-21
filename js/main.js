require.config({
	paths: {
		jquery: 'lib/jquery-1.10.2',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		cookie: 'lib/jquery.cookie',
		bootstrap: 'bootstrap',
		templates: '../templates',
		socketio: '../socket.io/socket.io'
	},
	shim: {
		socketio: {
	    	exports: 'io'
	    },
	    underscore: {
	      exports: '_'
	    },
	    backbone: {
	      deps: ["underscore", "jquery"],
	      exports: "Backbone"
	    },
	    cookie: {
	    	deps: ["jquery"],
	    	exports: "$"
	    },
	    bootstrap: {
	    	deps: ["jquery"],
	    	exports: "$"
	    }

  	}
});

require(['app'], function(App){
	App.initialize();
});