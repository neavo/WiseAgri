Ext.define("Project.view.container.orderViewTop", {
	extend : "Ext.Toolbar",
	xtype : "orderViewTop",
	config : {
		docked : "top",
		baseCls : "TopBar",
		items : [{
				xtype : "spacer",
			}, {
				xtype : "container",
				style : "background : #FFFFFF; color : #2BA4E6; border-radius : 1em;",
				html : "<b>　翼农频道　</b>",
				listeners : {
					tap : {
						fn : function () {
							if (this.getStyle() != "background : #FFFFFF; color : #2BA4E6; border-radius : 1em;")
							{
								this.setStyle("background : #FFFFFF; color : #2BA4E6; border-radius : 1em;");
							};
						},
						element : "element",
					},
				},
			}, {
				xtype : "spacer",
			}, {
				xtype : "container",
				html : "<b>　智慧频道　</b>",
				listeners : {
					tap : {
						fn : function () {
							DoLog(this.getStyle());
							if (this.getStyle() != "background : #FFFFFF; color : #2BA4E6; border-radius : 1em;")
							{
								this.setStyle("background : #FFFFFF; color : #2BA4E6; border-radius : 1em;");
							};
						},
						element : "element",
					},
				},
			}, {
				xtype : "spacer",
			},
		],
	},
});
