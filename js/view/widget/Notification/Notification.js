define([
	'jquery',
	'underscore',
	'backbone'
], function($,_, Backbone){
	return Backbone.View.extend({

		tagName: 'div',

		container: '#notification',

		className: 'alert',

		showTime: 20000,

		type: {
			'error': 'alert-danger',
			'info': 'alert-info',
			'warning': 'alert-warning',
			'success': 'alert-success'
		},

		events: {
			'hover .alert': 'hide'
		},

		initialize: function(options){

			this.$el.addClass(this.type[options.typeName] || this.type.info);

			this.$el.html(options.message || null);

		},

		show: function(){

			var _then = this;

			$(this.container).prepend(this.$el);
			setTimeout(function(){
				_then.hide();
			}, this.showTime);
		},

		hide: function(){
			var _then = this;

			this.$el.animate({opacity: 0}, 3000, function(){
				_then.remove();
			});
		}

	});

});