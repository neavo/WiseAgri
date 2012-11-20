Ext.define("Project.controller.widget.ZhiHuiBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			YiNongBtn : "YiNongBtn",
			ZhiHuiBtn : "ZhiHuiBtn",
		},
		control : {},
	},
	launch : function () {
		var YiNongBtn = this.getYiNongBtn();
		var ZhiHuiBtn = this.getZhiHuiBtn();
		ZhiHuiBtn.addListener({
			tap : {
				fn : function () {
					if (this.getStyle() != "background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;") {
						this.setStyle("background : #FFFFFF; color : #2BA4E6; -webkit-border-radius : 1em; padding-top : 0.2em; padding-bottom : 0.2em;");
						YiNongBtn.setStyle("background : #2BA4E6; color : #FFFFFF;");
					};
				},
				element : "element",
			},
		});
	},
});
