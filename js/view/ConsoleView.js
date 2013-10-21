/**
 * Created by Evgeniy on 21.10.13.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'resource/MainView',
    'text!templates/ConsoleTemplate.html',
    'view/widget/console/List'
], function($, _, Backbone, PageView, ConsoleMessageTemplate, ListView){
	return PageView.extend({

		template: _.template(ConsoleMessageTemplate),

		render: function(){
			this.$el.html(this.template());
		},

		afterRender: function(){
			var list = new ListView();
			list.render();
		} 
	});
});
