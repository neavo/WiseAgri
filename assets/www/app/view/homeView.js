Ext.define("Project.view.homeView", {
	extend : "Ext.Container",
	xtype : "homeView",
	config : {
		layout : "vbox",
		defaults : {
			flex : 1,
		},
		items : [{
				id : "homeViewTop",
				xtype : "toolbar",
				docked : "top",
				baseCls : "TopBar",
			}, {
				id : "homeViewMain",
				xtype : "carousel",
				style : "background :  #FFFFFF",
				layout : "vbox",
			}, {
				id : "homeViewBottom",
				xtype : "toolbar",
				docked : "bottom",
				baseCls : "BottomBar",
				layout : "hbox",
				items : [{
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "<img style = \"margin-top : 5%; height : 90%;\" src = \"resources/icons/AccountBtn.png\" />",
						listeners : {
							initialize : {
								fn : function (container, eOpts) {
									container.setHeight(Ext.Viewport.getWindowHeight() * 0.08);
								},
								single : true,
							},
							tap : {
								fn : function () {
									DoAlert("功能开发中 ...");
								},
								element : "element",
							},
						},
					}, {
						xtype : "spacer",
					}, {
						id : "DoOrderBtn",
						xtype : "container",
						html : "<img style = \"margin-top : 5%; height : 90%;\" src = \"resources/icons/DoOrderBtn.png\" />",
						listeners : {
							initialize : {
								fn : function (container, eOpts) {
									container.setHeight(Ext.Viewport.getWindowHeight() * 0.08);
								},
								single : true,
							},
						},
					}, {
						xtype : "spacer",
					}, {
						xtype : "container",
						html : "<img style = \"margin-top : 5%; height : 90%;\" src = \"resources/icons/FeedBackBtn.png\" />",
						listeners : {
							initialize : {
								fn : function (container, eOpts) {
									container.setHeight(Ext.Viewport.getWindowHeight() * 0.08);
								},
								single : true,
							},
							tap : {
								fn : function () {
									DoNextSwitch("FeedBack");
									Ext.getCmp("FeedBackTop").setTitle("意见反馈");
									DoLoad(Ext.getCmp("FeedBackMain").getStore(), "ZhiHui/GetFeedBack.jsp?appId=" + defaultBase[0]["id"]);
								},
								element : "element",
							},
						},
					}, {
						xtype : "spacer",
					},
				],
			},
		],
	},
});
