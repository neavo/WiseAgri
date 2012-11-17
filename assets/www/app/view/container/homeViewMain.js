Ext.define("Project.view.container.homeViewMain", {
	extend : "Ext.Container",
	xtype : "homeViewMain",
	config : {
		cls : "BackGround",
		layout : "hbox",
		items : [{
				id : "homeViewCarousel",
				xtype : "carousel",
				indicator : false,
				layout : "vbox",
				width : Ext.Viewport.getWindowWidth() * 0.75,
			}, {
				id : "homeViewRightContainer",
				xtype : "container",
				layout : "vbox",
				width : Ext.Viewport.getWindowWidth() * 0.25,
				items : [{
						xtype : "container",
						height : Ext.Viewport.getWindowHeight() * 0.18,
						layout : "vbox",
						items : [{
								xtype : "spacer",
							}, {
								id : "homeViewPageNum",
								xtype : "container",
								html : "<img class = rightContainerIcon src = resources/icons/pageNum_1.png />",
							}, {
								xtype : "spacer",
							},
						],
					}, {
						xtype : "container",
						height : Ext.Viewport.getWindowHeight() * 0.40,
					}, {
						xtype : "container",
						height : Ext.Viewport.getWindowHeight() * 0.42,
						layout : "vbox",
						items : [{
								xtype : "spacer",
							}, {
								xtype : "myAccountBtn",
							}, {
								xtype : "spacer",
							}, {
								xtype : "myAppBtn",
							}, {
								xtype : "spacer",
							}, {
								xtype : "aboutBtn",
							}, {
								xtype : "spacer",
							},
						],
					},
				],
			},
		],
	},
});
