define([
	'backbone',
	'view/HomeView',
	'view/LoginView'
], function(Backbone, HomeView, LoginView){

	var AppRouter = Backbone.Router.extend({
		routes: {
			'!/login': 'showLogin',

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

		Backbone.history.start();
	}

	return {
		initialize: initialize
	}

});