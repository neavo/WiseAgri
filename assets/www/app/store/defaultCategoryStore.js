Ext.define("Project.store.defaultCategoryStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.categoryModel",
		proxy : {
			type : "ajax",
			url : "data/defaultCategory.json",
		},
	},
});
