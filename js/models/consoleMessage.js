define([
  'backbone',
  'helpers'
], function(Backbone, helpers){

	return Backbone.Model.extend({

		defaults: {
			timestamp: (new Date().getTime() / 1000),
			color: "default",
			meta: null
		},

		initialize: function(){
			this.set('level_hash', helpers.md5(this.get('level')));
		}
	});

});	