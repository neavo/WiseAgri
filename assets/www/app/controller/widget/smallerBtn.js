Ext.define("Project.controller.widget.smallerBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			smallerBtn : "smallerBtn",
		},
		control : {
			smallerBtn : {
				tap : "onSmallerBtnTap",
			},
		},
	},
	onSmallerBtnTap : function () {
		switch (ScaleFlag) {
		case  - 2:
			DoAlert("当前已缩放至最小！");
			break;
		case  - 1:
			Ext.getCmp("newsDetailMain").setHtml(Ext.getCmp("newsDetailMain").getHtml().replace("newsDetailContentSmall", "newsDetailContentSmaller"));
			ScaleFlag = ScaleFlag - 1;
			break;
		case 0:
			Ext.getCmp("newsDetailMain").setHtml(Ext.getCmp("newsDetailMain").getHtml().replace("newsDetailContentNormal", "newsDetailContentSmall"));
			ScaleFlag = ScaleFlag - 1;
			break;
		case 1:
			Ext.getCmp("newsDetailMain").setHtml(Ext.getCmp("newsDetailMain").getHtml().replace("newsDetailContentBig", "newsDetailContentNormal"));
			ScaleFlag = ScaleFlag - 1;
			break;
		case 2:
			Ext.getCmp("newsDetailMain").setHtml(Ext.getCmp("newsDetailMain").getHtml().replace("newsDetailContentBigger", "newsDetailContentBig"));
			ScaleFlag = ScaleFlag - 1;
			break;
		default:
			break;
		};
	},
});
