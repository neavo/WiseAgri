Ext.define("Project.store.webCategoryStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.categoryModel",
		proxy : {
			type : "ajax",
			url : "data/webCategory.json",
		},
	}
});
