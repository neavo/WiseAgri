Ext.define("Project.view.homeView", {
	extend : "Ext.Container",
	xtype : "homeView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "homeViewTop",
			}, {
				xtype : "homeViewMain",
			}, {
				xtype : "homeViewBottom",
			},
		],
	},
});
