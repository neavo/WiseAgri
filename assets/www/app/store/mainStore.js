Ext.define("Project.store.mainStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.mainModel",
		pageSize : 5,
	},
});
