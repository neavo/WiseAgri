Ext.define("Project.view.DoQnA", {
	extend : "Ext.Container",
	xtype : "DoQnA",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "DoQnATop",
			}, {
				xtype : "DoQnAMain",
			}, {
				xtype : "DoQnABottom",
			}, 
		],
	},
});
