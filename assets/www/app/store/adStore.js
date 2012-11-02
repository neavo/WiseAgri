Ext.define("Project.store.adStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.adModel",
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + "Pull/getAd.jsp",
		},
	}
});
