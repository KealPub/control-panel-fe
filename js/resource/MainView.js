define([
	'jquery',
	'backbone',
	'models/user',
	'text!templates/slideTemplate.html'
], function($,Backbone, User, slideTemplate){

	var animateMethods = {
		slide: function(slide1Class, slide2Class, callback){
			$('.'+slide1Class).animate({
				left: '100%'
			}, 500, callback);
		},

		showHide: function(slide1Class, slide2Class, callback){

			var count = 2;
			var i = 0;
			var time = 200;

			var check = function(){
				if(count == ++i) callback();
			}

			$('.'+slide2Class).css('opacity', 0);
			$('.'+slide1Class).animate({opacity: 0},time, function(){
				check();
			});
			$('.'+slide2Class).animate({opacity: 100}, time, function(){
				check();
			});
		}
	}

	return Backbone.View.extend({

		loginUrl: "!/login",

		accessGuest: false,

		el: '#page',

		animateMethod: 'showHide',

		slide1Class: 'slide1',

		slide2Class: 'slide2',

		constructor: function(attributes, options){

			Backbone.View.apply(this, arguments);

			if(window.createPage === undefined) window.createPage = true;


			this.render = _.wrap(this.render, function(render){

				if(!this.beforeRender()) return;
				render.call(this, this.afterRender);
			});
		},

		beforeRender: function(){

			window.currentView = this;
				
			if(!this.accessGuest && !User.isAutorization()){
				window.back_url = location.hash;
				Backbone.history.navigate(this.loginUrl, {trigger: true, replace: true});
				return false;
			}
	
			
			return true;			
		},

		render: function(callback){

			if(window.createPage) {
				window.createPage = false;
				this.$el.html(this.template);
				callback();
			}
			else this.animateNavigate(callback);
		},

		animateNavigate: function(callback){
			var slide1 = this.$el.html();
			var slide2 = this.template;

			var html = _.template(slideTemplate, {slide1: slide1, slide2: slide2});

			this.$el.html(html);

			var _then = this;
			$('#securityBlock').show();
			this.animate(this.animateMethod, function(){
				$('#securityBlock').hide();
				_then.$el.html(slide2);
				callback();
			});
		},

		animate: function(method, callback){
			animateMethods[method](this.slide1Class, this.slide2Class, callback);
		},

		afterRender: function(){
			return true;
		},

		closePage: function(fragments){
			this._closePage();
		},

		_closePage: function(){
			this.undelegateEvents();
		}
	});
});