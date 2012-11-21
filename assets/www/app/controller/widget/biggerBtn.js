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
		switch (scaleFlag) {
		case  - 2:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmaller", "newsDetailContentSmall"));
			scaleFlag = scaleFlag + 1;
			break;
		case  - 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmall", "newsDetailContentNormal"));
			scaleFlag = scaleFlag + 1;
			break;
		case 0:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentNormal", "newsDetailContentBig"));
			scaleFlag = scaleFlag + 1;
			break;
		case 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentBig", "newsDetailContentBigger"));
			scaleFlag = scaleFlag + 1;
			break;
		case 2:
			DoAlert("当前已缩放至最大！");
			break;
		default:
			break;
		};
	},
});
