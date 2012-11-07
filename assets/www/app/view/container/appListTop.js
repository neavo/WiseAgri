Ext.define("Project.view.container.appListTop", {
	extend : "Ext.Container",
	xtype : "appListTop",
	config : {
		docked : "top",
		items : [{
				xtype : "toolbar",
				title : "订阅频道",
			}, {
				xtype : "toolbar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "searchfield",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
