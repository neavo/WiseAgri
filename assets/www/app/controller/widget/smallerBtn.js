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
		switch (scaleFlag) {
		case  - 2:
			DoAlert("当前已缩放至最小！");
			break;
		case  - 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentSmall", "newsDetailContentSmaller"));
			scaleFlag = scaleFlag - 1;
			break;
		case 0:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentNormal", "newsDetailContentSmall"));
			scaleFlag = scaleFlag - 1;
			break;
		case 1:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentBig", "newsDetailContentNormal"));
			scaleFlag = scaleFlag - 1;
			break;
		case 2:
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml().replace("newsDetailContentBigger", "newsDetailContentBig"));
			scaleFlag = scaleFlag - 1;
			break;
		default:
			break;
		};
	},
});
