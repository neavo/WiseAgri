Ext.define("Project.controller.container.newsListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			newsListMain : "newsListMain",
		},
		control : {
			newsListMain : {
				itemtap : "onNewsListMainItemtap",
			},
		},
	},
	onNewsListMainItemtap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		DoSwitch("newsDetail");
		DB.scaleFlag = 0;
		DB.newsDetailMain.setHtml("<div class = newsDetailTitle>" + data.newsTitle + "</div>"
			 + "<div class = newsDetailDataTime>" + data.dateTime + "　来源：" + data.newsPublisher + "</div>"
			 + "<HR align = left width = 100% color = #FFFFFF size = 1 noShade>");
		if (data.imageUrl != "" && data.imageUrl.toLowerCase() != "null") {
			setActivatedAlbum(data.imageUrl.split(";"));
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml()
				 + "<div>"
				 + "<img class = newsDetailImage onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = " + data.iconUrl + "/>"
				 + "<img class = newsDetailImageOverlay type = \"button\" onclick = \"DoShowAlbum();\" src = resources/images/imageOverlay.png >"
				 + "</div>"
				 + "<div style = \"margin-top : -2.1em;\" >" + "</div>");
		};
		DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml()
			 + "<div class = newsDetailContentNormal>" + data.newsContent + "</div>");
	},
});
