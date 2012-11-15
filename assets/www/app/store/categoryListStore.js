Ext.define("Project.store.categoryListStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.categoryModel",
		proxy : {
			type : "ajax",
			url : "data/categoryList.json",
		},
	}
});
