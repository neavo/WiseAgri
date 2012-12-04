Ext.define("Project.view.SnBList", {
	extend : "Ext.Container",
	xtype : "SnBList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "SnBListTop",
			}, {
				xtype : "SnBListMain",
			}, {
				xtype : "SnBListBottom",
			}, 
		],
	},
});
