Ext.define("Project.view.container.ZhiHuiTop", {
	extend : "Ext.Toolbar",
	xtype : "ZhiHuiTop",
	config : {
		docked : "top",
		baseCls : "TopBar",
		items : [{
				xtype : "spacer",
			}, {
				id : "YiNongBtn",
				xtype : "container",
				html : "<b>　翼农频道　</b>",
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				style : "background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;",
				html : "<b>　智慧频道　</b>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
