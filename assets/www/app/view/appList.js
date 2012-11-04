Ext.define("Project.view.appList", {
	extend : "Ext.Container",
	xtype : "appList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "appListTop",
			}, {
				xtype : "appListMain",
			}, {
				xtype : "appListBottom",
			}, 
		],
	},
});
