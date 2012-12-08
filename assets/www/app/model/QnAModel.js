Ext.define("Project.model.QnAModel", {
	extend : "Ext.data.Model",
	config : {
		fields : [
			"QnAType",
			"QContent",
			"QPublisher",
			"QPhone",
			"QTime",
			"QImage",
			"AContent",
			"APublisher",
			"APhone",
			"ATime",
			"AImage",
		],
	},
});
