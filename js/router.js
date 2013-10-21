define([
	'backbone',
	'view/HomeView',
	'view/LoginView',
	'view/ConsoleView'
], function(Backbone, HomeView, LoginView, ConsoleView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'!/login': 'showLogin',
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