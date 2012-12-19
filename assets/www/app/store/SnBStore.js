Ext.define("Project.store.SnBStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.SnBModel",
		pageSize : 5,
	},
});
