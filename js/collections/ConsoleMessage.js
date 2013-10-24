define([
	'backbone',
	'models/consoleMessage',
	'view/widget/Notification/Notification'
], function(Backbone, ConsoleModelMessage, Notification){
	var collection = Backbone.Collection.extend({

		model: ConsoleModelMessage,

		add: function(model){
			this.checkError(model);
			Backbone.Collection.prototype.add.apply(this, arguments);
		},

		checkError: function(message){
			if(message.color == "error") {
				var notice = new Notification({
					message: "Error! "+message.msg,
					typeName: 'error'
				});
				notice.show();
			}
		}


	});

	return new collection();
});