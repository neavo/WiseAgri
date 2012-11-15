Ext.define("Project.store.localAppStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.appModel",
		autoSync : true,
	},
});
