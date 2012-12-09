Ext.define("Project.view.FeedBack", {
	extend : "Ext.Container",
	xtype : "FeedBack",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "FeedBackTop",
			}, {
				xtype : "FeedBackMain",
			}, {
				xtype : "FeedBackBottom",
			}, 
		],
	},
});
