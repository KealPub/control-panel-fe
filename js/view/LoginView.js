define([
	'backbone',
	'resource/MainView',
	'models/user',
	'helpers',
	'text!templates/loginTemplate.html'
], function(Backbone, MainView, User, helpers, loginTemplate){
	return MainView.extend({

		accessGuest: true,

		events: {
			'click #loginSubmit': 'login'
		},

		loginForm: this.$('#loginForm'),

		messageContainer: $('#messageContainer'),

		errorMsg: "Неправильный логин или пароль",

		beforeRender: function(){
			if(User.isAutorization()) {
				Backbone.history.navigate('', true);
				return false;
			}
			return true; 
		},

		render: function(){
			this.$el.html(loginTemplate);
		},

		login: function(){
			console.log('test');
			var form = helpers.formToObject(this.$(loginForm));
			
			var _then = this;

			User.login(form.login, form.password, function(err, data){
				if(err)  _then.showMessage(_then.errorMsg);
				else     Backbone.history.navigate('#', true);
			});
		},

		showMessage: function(msg){
			this.$(messageContainer).show();
			this.$(messageContainer).html(msg);
		}

	});
});