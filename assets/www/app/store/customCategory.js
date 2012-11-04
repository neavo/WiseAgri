Ext.define("Project.store.customCategory", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.categoryModel",
		proxy : {
			type : "ajax",
			url : "data/customCategory.json",
		},
	},
});
