Ext.define("Project.store.YiNongStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.categoryModel",
		proxy : {
			type : "ajax",
			url : "data/YiNong.json",
		},
	}
});
