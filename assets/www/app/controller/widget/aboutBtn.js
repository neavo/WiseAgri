Ext.define("Project.controller.widget.aboutBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			aboutBtn : "aboutBtn",
		},
		control : {
			aboutBtn : {
				tap : "onAboutBtnTap",
			},
		},
	},
	onAboutBtnTap : function () {
		Ext.Msg.alert(DB.versionInfo, "版权信息：中国电信英山分公司<br>协办单位：英山县人民政府　　<br>　　英山县科技局<br>　　英山县广电局<br>　　英山县茶叶办<br>　　英山县卫生局<br>　　英山县旅游局<br>　　英山县招商局");
	},
});
