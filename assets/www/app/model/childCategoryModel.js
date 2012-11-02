Ext.define("Project.model.childCategoryModel", {
	extend : "Ext.data.Model",
	config : {
		fields : ["categoryId", "categoryTitle", "categoryIconUrl", "categoryStyle", "customHtml", "childCategory", "webUrl"],
	},
});
