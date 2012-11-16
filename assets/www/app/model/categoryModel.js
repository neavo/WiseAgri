Ext.define("Project.model.categoryModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"appId",
			"categoryId",
			"categoryName",
			"categoryIconUrl",
			"categoryStyle",
		],
	},
});
