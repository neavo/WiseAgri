Ext.define("Project.view.container.switchAppTop", {
	extend : "Ext.Container",
	xtype : "switchAppTop",
	config : {
		docked : "top",
		items : [{
				xtype : "toolbar",
				title : "其他客户端",
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
