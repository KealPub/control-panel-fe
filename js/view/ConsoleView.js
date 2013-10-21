/**
 * Created by Evgeniy on 21.10.13.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    'resource/MainView',
    'text!templates/ConsoleTemplate.html',
    'view/widget/console/List',
    'view/widget/Sidebar/Sidebar',
    'view/widget/Sidebar/widget/menu'
], function($, _, Backbone, PageView, ConsoleMessageTemplate, ListView, Sidebar, MenuSidebarWidget){
	return PageView.extend({

		template: _.template(ConsoleMessageTemplate),

		render: function(){
			this.$el.html(this.template());
		},

		afterRender: function(){
			var list = new ListView();
			list.render();

			var sidebar = new Sidebar();
			sidebar.add(new MenuSidebarWidget([
				{
					name: "home",
					link: "#"
				}
			]));
			sidebar.render();
		} 
	});
});
