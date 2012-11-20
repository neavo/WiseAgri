Ext.define("Project.view.widget.ZhiHuiBtn", {
	extend : "Ext.Container",
	xtype : "ZhiHuiBtn",
	config : {
		html : "<b>　智慧频道　</b>",
		listeners : {
			tap : {
				fn : function () {
					DoLog(this.getStyle());
					if (this.getStyle() != "background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;") {
						this.setStyle("background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;");
					};
				},
				element : "element",
			},
		},
	},
});
