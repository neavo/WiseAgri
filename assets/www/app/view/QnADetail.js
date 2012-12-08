Ext.define("Project.view.QnADetail", {
	extend : "Ext.Container",
	xtype : "QnADetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "QnADetailTop",
			}, {
				xtype : "QnADetailMain",
			}, {
				xtype : "QnADetailBottom",
			}, 
		],
	},
});
