Ext.define("Project.store.SnBStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.SnBModel",
		proxy : {
			type : "ajax",
			url : "data/SnB.json",
		},
		pageSize : 5,
	},
});
