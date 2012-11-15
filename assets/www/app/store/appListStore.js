Ext.define("Project.store.appListStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.appModel",
		proxy : {
			type : "jsonp",
			url : ServerUrl + "GetAppList.jsp",
		},
	},
});
