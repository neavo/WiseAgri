Ext.define("Project.view.ZhiHui", {
	extend : "Ext.Container",
	xtype : "ZhiHui",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "ZhiHuiTop",
				xtype : "toolbar",
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
			}, {
				id : "ZhiHuiMain",
				xtype : "carousel",
				layout : "vbox",
				style : "background : #FFFFFF;",
			}, {
				id : "ZhiHuiBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "button",
						icon : "resources/icons/whiteIcon.png",
						ui : "plain",
						iconCls : "search",
						iconMask : true,
						listeners : {
							tap : {
								fn : function () {
									DoAlert("功能开发中 ...");
								},
							},
						},
					}, {
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
