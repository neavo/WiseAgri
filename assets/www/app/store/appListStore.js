Ext.define("Project.store.appListStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.appModel",
		proxy : {
			type : "ajax",
			url : "data/appList.json",
		},
	},
});
