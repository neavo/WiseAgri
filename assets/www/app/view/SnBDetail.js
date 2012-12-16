Ext.define("Project.view.SnBDetail", {
	extend : "Ext.Container",
	xtype : "SnBDetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "SnBDetailTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "详细信息",
			}, {
				id : "SnBDetailMain",
				xtype : "container",
				scrollable : "vertical",
			}, {
				id : "SnBDetailBottom",
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
