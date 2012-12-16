Ext.define("Project.controller.QnAList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			QnAListMain : "#QnAListMain",
		},
		control : {
			QnAListMain : {
				itemtap : "onQnAListMainItemtap",
			},
		},
	},
	onQnAListMainItemtap : function (list, index, target, record, e, eOpts) {
		DoNextSwitch("QnADetail");
		var data = record.getData();
		var QnADetailMain = Ext.getCmp("QnADetailMain");
		QnADetailMain.setHtml("<div style = \" height : 0.5em \" ></div>"
			 + "<div style = \"background : #FFFFFF; -webkit-border-radius : 0.5em; padding : 0.25em; width : 95%; display : block; margin : auto;\">"
			 + "<div class = QnADetailContentNormal>" + "提问者：" + data.QPublisher + "</div>"
			 + "<div class = QnADetailContentNormal>" + "提问时间：" + data.QTime + "</div>"
			 + "<div class = QnADetailContentNormal>" + "电话号码：" + "<a href = \"tel:" + data.QPhone + "\">" + data.QPhone + "</a>" + "</div>"
			 + "<div class = QnADetailContentNormal>" + "提问内容：" + data.QContent + "</div>");
		if (data.QImage != "") {
			QnADetailMain.setHtml(QnADetailMain.getHtml()
				 + "<div style = \" margin-top : 0.5em; margin-bottom : 0.5m; \" >"
				 + "<img class = QnADetailImage onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = " + data.QImage + " />"
				 + "</div>"
				 + "</div>");
		} else {
			QnADetailMain.setHtml(QnADetailMain.getHtml()
				 + "</div>");
		};
		
		QnADetailMain.setHtml(QnADetailMain.getHtml()
			 + "<div style = \" height : 0.5em \" ></div>"
			 + "<div style = \"background : #CEEA99; -webkit-border-radius : 0.5em; padding : 0.25em; width : 95%; display : block; margin : auto;\">"
			 + "<div class = QnADetailContentNormal>" + "回答者：" + data.APublisher + "</div>"
			 + "<div class = QnADetailContentNormal>" + "回答时间：" + data.ATime + "</div>"
			 + "<div class = QnADetailContentNormal>" + "电话号码：" + "<a href = \"tel:" + data.APhone + "\">" + data.APhone + "</a>" + "</div>"
			 + "<div class = QnADetailContentNormal>" + "回答内容：" + data.AContent + "</div>");
		if (data.AImage != "") {
			QnADetailMain.setHtml(QnADetailMain.getHtml()
				 + "<div style = \" margin-top : 0.5em; margin-bottom : 0.5m; \" >"
				 + "<img class = QnADetailImage onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = " + data.AImage + " />"
				 + "</div>"
				 + "</div>");
		} else {
			QnADetailMain.setHtml(QnADetailMain.getHtml()
				 + "</div>");
		};
	},
});
