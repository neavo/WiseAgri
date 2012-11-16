Ext.define("Project.view.container.appListBottom", {
	extend : "Ext.Toolbar",
	xtype : "appListBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<div style = \" color : white; \"><b>翼农　</b></div>",
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<div style = \" color : white; \"><b>地方　</b></div>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
