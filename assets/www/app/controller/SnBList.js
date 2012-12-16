Ext.define("Project.controller.SnBList", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			SnBListMain : "#SnBListMain",
		},
		control : {
			SnBListMain : {
				itemtap : "onSnBListMainItemtap",
			},
		},
	},
	onSnBListMainItemtap : function (list, index, target, record, e, eOpts) {
		DoNextSwitch("SnBDetail");
		var data = record.getData();
		var SnBDetailMain = Ext.getCmp("SnBDetailMain");
		SnBDetailMain.setHtml("<div style = \" height : 0.5em \" ></div>"
			 + "<div style = \"background : #FFFFFF; -webkit-border-radius : 0.5em; padding : 0.25em; width : 95%; display : block; margin : auto;\">"
			 + "<div class = SnBDetailTitle>" + data.SnBTitle + "</div>"
			 + "<div class = SnBDetailTimePubliser>" + data.SnBTime + "</div>"
			 + "<HR align = left width = 100% color = #FFFFFF size = 1 noShade>"
			 + "<div class = SnBDetailContentNormal>" + "价格：" + data.SnBPrice + "</div>"
			 + "<div class = SnBDetailContentNormal>" + "地区：" + data.SnBArea + "</div>"
			 + "<div class = SnBDetailContentNormal>" + "联系人：" + data.SnBPublisher + "</div>"
			 + "<div class = SnBDetailContentNormal>" + "电话号码：" + "<a href = \"tel:" + data.SnBPhone + "\">" + data.SnBPhone + "</a>" + "</div>"
			 + "<div class = SnBDetailContentNormal>" + "详细内容：" + data.SnBContent + "</div>");
		if (data.SnBImage != "") {
			SnBDetailMain.setHtml(SnBDetailMain.getHtml()
				 + "<div>"
				 + "<img class = SnBDetailImage onerror = \" this.src = 'resources/icons/defaultIcon.png' \" src = " + data.SnBImage + " />"
				 + "</div>"
				 + "</div>");
		} else {
			SnBDetailMain.setHtml(SnBDetailMain.getHtml()
				 + "</div>");
		};
	},
});
