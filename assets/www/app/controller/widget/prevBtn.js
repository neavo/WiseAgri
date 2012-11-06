Ext.define("Project.controller.widget.prevBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			prevBtn : "prevBtn",
		},
		control : {
			prevBtn : {
				tap : "onPrevBtnTap",
			},
		},
	},
	onPrevBtnTap : function () {
		if (DB.albumPage != 1) {
			DB.albumPage = DB.albumPage - 1;
			DB.albumViewTop.setTitle(DB.albumPage + " / " + DB.activatedAlbum.length);
			DB.albumViewMain.setHtml("<img class = albumImage src = " + DB.activatedAlbum[DB.albumPage - 1] + ">");
		} else {
			Ext.Msg.alert(DB.versionInfo, "已是第一张图片！");
		};
	},
});
