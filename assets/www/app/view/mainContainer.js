Ext.define("Project.view.mainContainer", {
	extend : "Ext.Container",
	xtype : "mainContainer",
	config : {
		layout : "card",
		items : [{
				xtype : "homeView",
			}, {
				xtype : "appList",
			}, {
				xtype : "categoryList",
			}, {
				xtype : "childCategory",
			},
		],
	},
});
