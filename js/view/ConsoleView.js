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
    'view/widget/Sidebar/widget/menu',
    'view/widget/Sidebar/widget/metaViewer'
], function($, _, Backbone, PageView, ConsoleMessageTemplate, ListView, Sidebar, MenuSidebarWidget, metaViewer){
	return PageView.extend({

		template: _.template(ConsoleMessageTemplate, {}),

		afterRender: function(){

			var sidebar = new Sidebar();
			sidebar.add(new MenuSidebarWidget([
				{
					name: "home",
					link: "#"
				}
			]));

			sidebar.add(new metaViewer());

			sidebar.render();

			var list = new ListView();
			list.render();

		},

		closePage: function(){
			console.log(1111);
		} 
	});
});
