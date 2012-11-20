Ext.define("Project.view.container.orderViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "orderViewBottom",
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
