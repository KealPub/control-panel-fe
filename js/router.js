define([
	'backbone',
	'view/HomeView',
	'view/LoginView',
	'models/user'
], function(Backbone, HomeView, LoginView, User){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'!/login': 'showLogin',
			'!/logout': 'logout',

			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){

		var app_router = new AppRouter;

		app_router.on('route:showLogin', function(){
			var login = new LoginView();
			login.render();
		});

		app_router.on('route:defaultAction', function(){
			var home = new HomeView();
			home.render();
		});

		app_router.on('route:logout', function(){
			User.logout();
			Backbone.history.navigate('#!/login', true);
		});

		Backbone.history.start();
	}

	return {
		initialize: initialize
	}

});