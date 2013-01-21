Ext.define("Project.view.newsDetail", {
	extend : "Ext.Container",
	xtype : "newsDetail",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "newsDetailTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
				title : "详细信息",
			}, {
				id : "newsDetailMain",
				xtype : "container",
				scrollable : "vertical",
			}, {
				id : "newsDetailBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						id : "NewsSkimNum",
						xtype : "container",
					}, {
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "分享 ...",
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
