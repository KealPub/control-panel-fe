define([
	'backbone',
	'view/HomeView',
	'view/LoginView',
	'models/user',
	'view/ConsoleView'
], function(Backbone, HomeView, LoginView, User, ConsoleView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'!/login': 'showLogin',
			'!/logout': 'logout',
			'!/console': 'showConsole',

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

		app_router.on('route:showConsole', function(){
			var list = new ConsoleView();
			list.render();
		});

		Backbone.history.start();
	}

	return {
		initialize: initialize
	}

});