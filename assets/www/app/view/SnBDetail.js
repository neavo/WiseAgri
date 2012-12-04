Ext.define("Project.view.SnBDetail", {
	extend : "Ext.Container",
	xtype : "SnBDetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "SnBDetailTop",
			}, {
				xtype : "SnBDetailMain",
			}, {
				xtype : "SnBDetailBottom",
			}, 
		],
	},
});
