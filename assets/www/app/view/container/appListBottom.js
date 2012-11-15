Ext.define("Project.view.container.appListBottom", {
	extend : "Ext.Toolbar",
	xtype : "appListBottom",
	config : {
		docked : "bottom",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<img class = toolbarBtnIcon src = resources/icons/customCategoryBtn.png />",
			}, {
				xtype : "container",
				html : "<div class = toolbarBtnName ><b>翼农　</b></div>",
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<img class = toolbarBtnIcon src = resources/icons/myAccountBtn.png />",
			}, {
				xtype : "container",
				html : "<div class = toolbarBtnName ><b>地方　</b></div>",
			}, {
				xtype : "spacer",
			},
		],
	},
});
