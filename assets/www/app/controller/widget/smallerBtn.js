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
		switch (DB.scaleFlag) {
		case  - 2:
			Ext.Msg.alert(DB.versionInfo, "当前已缩放至最小！");
			break;
		case  - 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmall", "newsDetailContentSmaller"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		case 0:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentNormal", "newsDetailContentSmall"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		case 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentBig", "newsDetailContentNormal"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		case 2:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentBigger", "newsDetailContentBig"));
			DB.scaleFlag = DB.scaleFlag - 1;
			break;
		default:
			break;
		};
	},
});
