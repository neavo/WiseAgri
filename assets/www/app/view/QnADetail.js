Ext.define("Project.view.QnADetail", {
	extend : "Ext.Container",
	xtype : "QnADetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "QnADetailTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "详细信息",
			}, {
				id : "QnADetailMain",
				xtype : "container",
				scrollable : "vertical",
			}, {
				id : "QnADetailBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "homeBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "backBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
