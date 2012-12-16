Ext.define("Project.controller.container.QnAListMain", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			QnAListMain : "QnAListMain",
		},
		control : {
			QnAListMain : {
				itemtap : "onQnAListMainItemtap",
			},
		},
	},
	onQnAListMainItemtap : function (list, index, target, record, e, eOpts) {
		var data = record.getData();
		DoNextSwitch("QnADetail");
		DB.QnADetailMain.setHtml("<div style = \" height : 0.5em \" ></div>"
			 + "<div style = \"background : #FFFFFF; -webkit-border-radius : 0.5em; padding : 0.25em; width : 95%; display : block; margin : auto;\">"
			 + "<div class = QnADetailContentNormal>" + "提问者：" + data.QPublisher + "</div>"
			 + "<div class = QnADetailContentNormal>" + "提问时间：" + data.QTime + "</div>"
			 + "<div class = QnADetailContentNormal>" + "电话号码：" + "<a href = \"tel:" + data.QPhone + "\">" + data.QPhone + "</a>" + "</div>"
			 + "<div class = QnADetailContentNormal>" + "提问内容：" + data.QContent + "</div>");
		if (data.QImage != "") {
			DB.QnADetailMain.setHtml(DB.QnADetailMain.getHtml()
				 + "<div style = \" margin-top : 0.5em; margin-bottom : 0.5m; \" >"
				 + "<img class = QnADetailImage onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = " + data.QImage + " />"
				 + "</div>"
				 + "</div>");
		} else {
			DB.QnADetailMain.setHtml(DB.QnADetailMain.getHtml()
				 + "</div>");
		};
		
		DB.QnADetailMain.setHtml(DB.QnADetailMain.getHtml()
			 + "<div style = \" height : 0.5em \" ></div>"
			 + "<div style = \"background : #CEEA99; -webkit-border-radius : 0.5em; padding : 0.25em; width : 95%; display : block; margin : auto;\">"
			 + "<div class = QnADetailContentNormal>" + "回答者：" + data.APublisher + "</div>"
			 + "<div class = QnADetailContentNormal>" + "回答时间：" + data.ATime + "</div>"
			 + "<div class = QnADetailContentNormal>" + "电话号码：" + "<a href = \"tel:" + data.APhone + "\">" + data.APhone + "</a>" + "</div>"
			 + "<div class = QnADetailContentNormal>" + "回答内容：" + data.AContent + "</div>");
		if (data.AImage != "") {
			DB.QnADetailMain.setHtml(DB.QnADetailMain.getHtml()
				 + "<div style = \" margin-top : 0.5em; margin-bottom : 0.5m; \" >"
				 + "<img class = QnADetailImage onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = " + data.AImage + " />"
				 + "</div>"
				 + "</div>");
		} else {
			DB.QnADetailMain.setHtml(DB.QnADetailMain.getHtml()
				 + "</div>");
		};
	},
});
