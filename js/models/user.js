define([
	'jquery',
	'backbone',
	'cookie'
], function($, Backbone){
	var User = Backbone.Model.extend({

		defaults: {
			access_token: null,
			user_id: null
		},

		initialize: function(){
			if($.cookie('access_token')){
				this.set('access_token', $.cookie('access_token'))
				this.set('user_id', $.cookie('user_id'));
			}
		},

		isAutorization: function(){
			return !!this.get('access_token');
		},

		login: function(login, pass, callback){

			var _then = this;

			$.post('/login', {
				login: login,
				password: pass
			}, function(data){
				try{
					data = JSON.parse(data);
				}
				catch(err){
					return callback.call(_then, err, data);
				}

				if(data.error) return callback.call(_then, data.error, data);	

				_then.set('access_token', data.access_token);
				_then.set('user_id', data.user_id);

				$.cookie('access_token', data.access_token);
				$.cookie('user_id', data.user_id);

				callback.call(_then, null, data);

			});
		},

		logout: function(){
			this.set('access_token', null);
			this.set('user_id', null);
		}


	});

	return new User();
});