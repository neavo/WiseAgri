Ext.define("Project.view.container.homeViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "homeViewBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "customCategoryBtn",
			}, {
				xtype : "container",
				html : "<div class = homeViewName ><b>订阅新频道<b></div>",
			}, {
				xtype : "spacer",
			}, {
				xtype : "myAccountBtn",
			}, {
				xtype : "container",
				html : "<div class = homeViewName ><b>我的工作台<b></div>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
