Ext.define("Project.view.container.ZhiHuiBottom", {
	extend : "Ext.Toolbar",
	xtype : "ZhiHuiBottom",
	config : {
		docked : "bottom",
		baseCls : "BottomBar",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "button",
				icon : "resources/icons/whiteIcon.png",
				ui : "plain",
				iconCls : "search",
				iconMask : true,
				listeners : {
					tap : {
						fn : function () {
							DoAlert("功能开发中 ...");
						},
					},
				},
			}, {
				xtype : "spacer",
			}, {
				xtype : "backBtn",
			}, {
				xtype : "spacer",
			},
		],
	},
});
