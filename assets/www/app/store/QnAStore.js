Ext.define("Project.store.QnAStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.QnAModel",
		pageSize : 5,
	},
});
