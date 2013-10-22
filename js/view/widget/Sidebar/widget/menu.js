define([
	'backbone',
	'text!templates/widget/Sidebar/widget/menu.html'
], function(Backbone, MenuTemplate){
	return Backbone.View.extend({

		template: _.template(MenuTemplate),

		menuList: [],

		initialize: function(menu){
			this.setMenu(menu);
		},

		setMenu: function(menu){
			this.menuList = menu;
		},

		addMenuItem: function(item){
			this.menuList.push(item);
		},

		render: function(){
			this.$el.html(this.template({menu: this.menuList}));
		}

	});
});