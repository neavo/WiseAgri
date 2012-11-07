Ext.define("Project.view.container.categoryListTop", {
	extend : "Ext.Container",
	xtype : "categoryListTop",
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
