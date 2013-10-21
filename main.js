require.config({
	paths: {
		jquery: 'lib/jquery-1.10.2',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		socketio: '../socket.io/socket.io'
	},
	shim: {
	    'socketio': {
	      exports: 'io'
	    },
	    'underscore': {
	      exports: '_'
	    },
	    'backbone': {
	      deps: [
	        'underscore',
	        'jquery'
	      ],
	      exports: 'Backbone'
	    }
  	}
});

require(['app'], function(App){
	App.initialize();
});