// 设置正在使用的Controller
function setActivatedController(controller) {
	DB.activatedController = controller;
};

// 设置正在读取的频道
function setActivatedCategory(category) {
	DB.activatedCategory = category;
};

// 播放激活的视频
function playVideo() {
	window.plugins.videoPlayer.play(DB.videoUrl);
};

// 切换页面
function DoSwitch(view) {
	var noView = view.replace("View", "");
	DB[noView + "Top"].hide();
	DB[noView + "Main"].hide();
	DB[noView + "Bottom"].hide();
	DB.mainContainer.setActiveItem(DB[view]);
	DB[noView + "Top"].show();
	DB[noView + "Main"].show();
	DB[noView + "Bottom"].show();
	setActivatedController(DB.mainController.getApplication().getController(view));
};

// 拍照上传一揽子函数
function DoGetPhoto() {
	navigator.camera.getPicture(function (url) {
		document.getElementById("publishImage").src = url;
		DoPublish(DB.publishIdTextFiled.getValue());
		document.getElementById("imageStatus").innerHTML = "上传中 ...";
	}, function () {
		return;
	}, {
		quality : 75,
		destinationType : destinationType.FILE_URI,
		targetWidth : 450,
		targetHeight : 450,
	});
};
function DoPublish(publishId) {
	var imageUrl = document.getElementById("publishImage").src;
	if (imageUrl != "file:///android_asset/www/resources/icons/defaultImage.png") {
		uploadPic(1, imageUrl, publishId);
	};
};
function uploadPic(imageId, imageURI, qaId) {
	var options = new FileUploadOptions();
	var params = new Object();
	params.imageId = imageId;
	params.qaId = qaId;
	options.fileKey = "file";
	var extension = imageURI.substr(imageURI.lastIndexOf(".") + 1).toUpperCase();
	if (extension == "PNG") {
		options.mimeType = "image/png";
	} else if (extension) {
		options.mimeType = "image/gif";
	} else {
		options.mimeType = "image/jpeg";
	};
	options.chunkedMode = false;
	options.fileName = imageURI.substr(imageURI.lastIndexOf("/") + 1);
	options.params = params;
	var eFileTransfer = new FileTransfer();
	eFileTransfer.upload(imageURI, Website.serverUrl + "QAServlet", function (r) {
		document.getElementById("imageStatus").innerHTML = "上传成功！";
		return true;
	}, function (error) {
		document.getElementById("imageStatus").innerHTML = "上传失败！";
		document.getElementById("publishImage").src = "resources/icons/defaultImage.png";
		return false;
	}, options);
};
