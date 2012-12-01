Ext.define("Project.view.container.YiNongTop", {
	extend : "Ext.Toolbar",
	xtype : "YiNongTop",
	config : {
		docked : "top",
		baseCls : "TopBar",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				style : "background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;",
				html : "<b>　翼农频道　</b>",
			}, {
				xtype : "spacer",
			}, {
				id : "ZhiHuiBtn",
				xtype : "container",
				html : "<b>　智慧频道　</b>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
