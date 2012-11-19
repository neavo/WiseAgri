Ext.define("Project.view.container.orderViewBottom", {
	extend : "Ext.Toolbar",
	xtype : "orderViewBottom",
	config : {
		docked : "bottom",
		baseCls : "BottomBar",
		items : [{
				xtype : "spacer",
			}, {
				icon : "resources/icons/whiteIcon.png",
				ui : "plain",
				iconCls : "search",
				iconMask : true,
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
