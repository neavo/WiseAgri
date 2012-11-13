Ext.define("Project.store.childCategoryStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.categoryModel",
		proxy : {
			type : "ajax",
			url : "data/childCategory.json",
		},
	}
});
