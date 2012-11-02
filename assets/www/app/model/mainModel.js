Ext.define("Project.model.mainModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [{
				name : "id",
				type : "int",
			}, {
				name : "title",
				type : "string",
			}, {
				name : "content",
				type : "string",
			}, {
				name : "publisher",
				type : "string",
			}, {
				name : "videourl",
				type : "string",
			}, {
				name : "imageurl1",
				type : "string",
			}, {
				name : "datetime",
				type : "string",
			},
		],
	},
});
