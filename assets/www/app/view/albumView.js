Ext.define("Project.view.albumView", {
	extend : "Ext.Container",
	xtype : "albumView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "albumViewTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "更多图片",
			}, {
				id : "albumViewMain",
				xtype : "carousel",
				scrollable : false,
				cls : "albumCarousel",
			}, {
				id : "albumViewBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "backBtn",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
