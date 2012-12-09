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
		ScaleFlag = 0;
		DB.newsDetailMain.setHtml("<div style = \" height : 0.5em \" ></div>"
			 + "<div style = \"background : #FFFFFF; -webkit-border-radius : 0.5em; padding : 0.25em; width : 95%; display : block; margin : auto;\">"
			 + "<div class = newsDetailTitle>" + data.newsTitle + "</div>"
			 + "<div class = newsDetailDataTime>" + data.dateTime + "　来源：" + data.newsPublisher + "</div>"
			 + "<HR align = left width = 100% color = #FFFFFF size = 1 noShade>");
		if (data.imageUrl != "") {
			setActivatedAlbum(data.imageUrl.split(";"));
			DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml()
				 + "<div>"
				 + "<img class = newsDetailImage onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = " + data.iconUrl + " />"
				 + "</div>"
				 + "<div style = \"height : 0.25em\"></div>"
				 + "<div type = \"button\" onclick = \"DoShowAlbum();\" style = \"text-align : center; background : #CEEA99; -webkit-border-radius : 0.5em; padding : 0.25em; font-size : 0.8em;\">　点击这里浏览更多图片！　</div>");
		};
		DB.newsDetailMain.setHtml(DB.newsDetailMain.getHtml()
			 + "<div class = newsDetailContentNormal>" + data.newsContent + "</div>"
			 + "</div>");
	},
});
