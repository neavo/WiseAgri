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
				flex : 3,
			}, {
				id : "homeViewRightContainer",
				xtype : "container",
				layout : "vbox",
				flex : 1,
				items : [{
						xtype : "container",
						flex : 18,
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
						flex : 40,
					}, {
						xtype : "container",
						flex : 42,
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
