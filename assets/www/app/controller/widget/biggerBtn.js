Ext.define("Project.controller.widget.biggerBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			biggerBtn : "biggerBtn",
		},
		control : {
			biggerBtn : {
				tap : "onBiggerBtnTap",
			},
		},
	},
	onBiggerBtnTap : function () {
		switch (DB.scaleFlag) {
		case  - 2:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmaller", "newsDetailContentSmall"));
			DB.scaleFlag = DB.scaleFlag + 1;
			break;
		case  - 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmall", "newsDetailContentNormal"));
			DB.scaleFlag = DB.scaleFlag + 1;
			break;
		case 0:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentNormal", "newsDetailContentBig"));
			DB.scaleFlag = DB.scaleFlag + 1;
			break;
		case 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentBig", "newsDetailContentBigger"));
			DB.scaleFlag = DB.scaleFlag + 1;
			break;
		case 2:
			Ext.Msg.alert(DB.versionInfo, "当前已缩放至最大！");
			break;
		default:
			break;
		};
	},
});
