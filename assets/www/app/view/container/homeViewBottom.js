Ext.define("Project.view.container.homeViewBottom", {
	extend : "Ext.Container",
	xtype : "homeViewBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "container",
				layout : "hbox",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "categorySettingBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "switchAppBtn",
					}, {
						xtype : "spacer",
					}, {
						xtype : "myStationBtn",
					}, {
						xtype : "spacer",
					},
				],
			}, {
				xtype : "toolbar",
				title : "中国电信湖北分公司",
			},
		],
	},
});
