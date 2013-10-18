define([
	'jquery',
	'backbone',
	'models/user'
], function($,Backbone, User){
	return Backbone.View.extend({

		loginUrl: "!/login",

		accessGuest: false,

		el: '#page',

		constructor: function(attributes, options){

			Backbone.View.apply(this, arguments);

			this.render = _.wrap(this.render, function(render){
				if(!this.beforeRender()) return;
				render.apply(this);
				this.afterRender();
			});
		},

		beforeRender: function(){
			if(!this.accessGuest && !User.isAutorization()){
				Backbone.history.navigate(this.loginUrl, {trigger: true, replace: true});
				return false;
			}
			return true;			
		},

		afterRender: function(){
			return true;
		}
	});
});