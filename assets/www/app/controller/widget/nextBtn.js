Ext.define("Project.controller.widget.nextBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			nextBtn : "nextBtn",
		},
		control : {
			nextBtn : {
				tap : "onNextBtnTap",
			},
		},
	},
	onNextBtnTap : function () {
		if (DB.albumPage + 1 <= DB.activatedAlbum.length) {
			DB.albumPage = DB.albumPage + 1;
			DB.albumViewTop.setTitle(DB.albumPage + " / " + DB.activatedAlbum.length);
			DB.albumViewMain.setHtml("<img class = albumImage src = " + DB.activatedAlbum[DB.albumPage - 1] + ">");
		} else {
			Ext.Msg.alert(DB.versionInfo, "已是最后一张图片！");
		};
	},
});
