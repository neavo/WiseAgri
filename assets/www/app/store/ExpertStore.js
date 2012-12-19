Ext.define("Project.store.ExpertStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.ExpertModel",
		pageSize : 3,
	},
});
