Ext.define("Project.controller.widget.aboutBtn", {
	extend : "Ext.app.Controller",
	config : {
		refs : {
			aboutBtn : "aboutBtn",
		},
		control : {},
	},
	launch : function () {
		this.getAboutBtn().addListener({
			tap : {
				fn : function () {
					DoAlert("版权所有：中国电信湖北分公司</br>技术支持：武汉理工大学计算机学院");
				},
				element : "element",
			},
		});
	},
});
