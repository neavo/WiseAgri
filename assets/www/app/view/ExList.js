Ext.define("Project.view.ExList", {
	extend : "Ext.Container",
	xtype : "ExList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "ExListTop",
			}, {
				xtype : "ExListMain",
			}, {
				xtype : "ExListBottom",
			}, 
		],
	},
});
