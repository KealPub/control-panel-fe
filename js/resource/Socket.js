define([
	'socketio',
	'collections/ConsoleMessage'
], function(io, ConsoleMessage){

	return {
		start: function(){
			var socket = io.connect('http://localhost:3000/console');
			socket.on('new_log', function(data){
				ConsoleMessage.add(data);
			});
		}	
	}
	

});