Ext.define("Project.model.categoryModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			// 客户端ID
			"appId",
			// 频道属性
			"categoryId",
			"categoryName",
			"categoryLevel",
			"categoryIconUrl",
			"categoryStyle",
			"extraParam",
			// 客户端是否被订阅
			"categoryListCheck",
		],
	},
});
