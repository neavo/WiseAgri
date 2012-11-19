Ext.define("Project.view.container.orderViewTop", {
	extend : "Ext.Toolbar",
	xtype : "orderViewTop",
	config : {
		docked : "top",
		baseCls : "TopBar",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<div style = \" color : white; \"><b>翼农频道</b></div>",
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<div style = \" color : white; \"><b>智慧频道</b></div>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
