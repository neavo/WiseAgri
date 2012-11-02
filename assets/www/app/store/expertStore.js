Ext.define("Project.store.expertStore", {
	extend : "Ext.data.Store",
	config : {
		model : "Project.model.expertModel",
		pageSize : 3,
		proxy : {
			type : "jsonp",
			url : Website.serverUrl + "Pull/getExpert.jsp",
		},
	}
});
