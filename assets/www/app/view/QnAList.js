Ext.define("Project.view.QnAList", {
	extend : "Ext.Container",
	xtype : "QnAList",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				xtype : "QnAListTop",
			}, {
				xtype : "QnAListMain",
			}, {
				xtype : "QnAListBottom",
			}, 
		],
	},
});
