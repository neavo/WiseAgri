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
			DB.infoDetailMain.setHtml(DB.infoDetailMain.getHtml().replace("infoDetailContentSmaller", "infoDetailContentSmall"));
			DB.scaleFlag = DB.scaleFlag + 1;
			break;
		case  - 1:
			DB.infoDetailMain.setHtml(DB.infoDetailMain.getHtml().replace("infoDetailContentSmall", "infoDetailContentNormal"));
			DB.scaleFlag = DB.scaleFlag + 1;
			break;
		case 0:
			DB.infoDetailMain.setHtml(DB.infoDetailMain.getHtml().replace("infoDetailContentNormal", "infoDetailContentBig"));
			DB.scaleFlag = DB.scaleFlag + 1;
			break;
		case 1:
			DB.infoDetailMain.setHtml(DB.infoDetailMain.getHtml().replace("infoDetailContentBig", "infoDetailContentBigger"));
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
