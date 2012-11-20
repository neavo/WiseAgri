Ext.define("Project.view.container.orderViewTop", {
	extend : "Ext.Toolbar",
	xtype : "orderViewTop",
	config : {
		docked : "top",
		baseCls : "TopBar",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "YiNongBtn",
			}, {
				xtype : "spacer",
			}, {
				xtype : "ZhiHuiBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
