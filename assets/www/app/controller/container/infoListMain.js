Ext.define("Project.controller.container.infoListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			infoListMain : "infoListMain",
		},
		control : {
			infoListMain : {
				itemtap : "onInfoListMainItemTap",
			},
		},
	},
	onInfoListMainItemTap : function (list, index, e, eOpts) {
		DoSwitch("infoDetail");
		if (list.getStore().getAt(index).get("videourl") != "" && list.getStore().getAt(index).get("videourl").toLowerCase() != "null") {
			DB.videoUrl = list.getStore().getAt(index).get("videourl");
			DB.scaleFlag = 0;
			DB.infoDetailMain.setHtml("<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<center><input class= \"palyVideo\"  type =\"button\" onclick=\"playVideo();\" /></center>"
				 + "<div class = infoDetailContentNormal>" + list.getStore().getAt(index).get("content") + "</div>");
		} else {
			DB.scaleFlag = 0;
			DB.infoDetailMain.setHtml("<div class = infoDetailTitle><b>" + list.getStore().getAt(index).get("title") + "</b></div>"
				 + "<div class = infoDetailDataTime>" + list.getStore().getAt(index).get("datetime") + "</div>"
				 + "<div class = infoDetailDataTime>" + "来源：" + list.getStore().getAt(index).get("publisher") + "</div>"
				 + "<hr width = 100% size = 2 color = #000000 align = center noshade>"
				 + "<div class = infoDetailContentNormal>" + list.getStore().getAt(index).get("content") + "</div>");
		};
	},
});
