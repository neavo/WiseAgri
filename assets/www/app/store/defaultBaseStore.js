Ext.define("Project.store.defaultBaseStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.appModel",
		proxy : {
			type : "ajax",
			url : "data/defaultBase.json",
		},
	},
});
