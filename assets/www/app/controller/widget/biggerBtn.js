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
		switch (ScaleFlag) {
		case  - 2:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmaller", "newsDetailContentSmall"));
			ScaleFlag = ScaleFlag + 1;
			break;
		case  - 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmall", "newsDetailContentNormal"));
			ScaleFlag = ScaleFlag + 1;
			break;
		case 0:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentNormal", "newsDetailContentBig"));
			ScaleFlag = ScaleFlag + 1;
			break;
		case 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentBig", "newsDetailContentBigger"));
			ScaleFlag = ScaleFlag + 1;
			break;
		case 2:
			DoAlert("当前已缩放至最大！");
			break;
		default:
			break;
		};
	},
});
