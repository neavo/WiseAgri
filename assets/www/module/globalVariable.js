var Website = {
	serverUrl : "http://221.235.190.14:8080/AjaxServer/",
};
var DB = {
	versionInfo : "掌上 • 英山 v3.6",
	activatedController : "",
	activatedCategory : "",
	weather : {
		icon : "08",
		text : "晴朗",
		low : "10",
		high : "20",
	},
	videoUrl : "",
	scaleFlag : 0,
};
var Category = [{
		categoryTitle : "新闻",
		categoryIconUrl : "resources/icons/01.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryTitle : "图文新闻",
				categoryIconUrl : "resources/icons/01.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "400",
						categoryTitle : "时政要闻",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "401",
						categoryTitle : "部门动态",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "402",
						categoryTitle : "财经新闻",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "403",
						categoryTitle : "科技动态",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "404",
						categoryTitle : "文化动态",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "405",
						categoryTitle : "网络媒体",
						categoryIconUrl : "resources/icons/01.png",
					}, ],
			}, {
				categoryTitle : "视频新闻",
				categoryIconUrl : "resources/icons/01.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "406",
						categoryTitle : "英山新闻",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "407",
						categoryTitle : "行风热线",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "408",
						categoryTitle : "与法同行",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "409",
						categoryTitle : "神州大地英山人",
						categoryIconUrl : "resources/icons/01.png",
					}, {
						categoryId : "463",
						categoryTitle : "聚焦开发区",
						categoryIconUrl : "resources/icons/01.png",
					}, ],
			}, ],
	}, {
		categoryTitle : "政务",
		categoryIconUrl : "resources/icons/02.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryTitle : "英山印象",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "410",
						categoryTitle : "走进英山",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "411",
						categoryTitle : "行政规划",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "412",
						categoryTitle : "自然地理",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "413",
						categoryTitle : "人口民族",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "414",
						categoryTitle : "县景县貌",
						categoryIconUrl : "resources/icons/02.png",
					}, ],
			}, {
				categoryTitle : "政务信息",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "415",
						categoryTitle : "县委文件",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "416",
						categoryTitle : "政府文件",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "417",
						categoryTitle : "部门文件",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "418",
						categoryTitle : "领导介绍",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "419",
						categoryTitle : "政策长廊",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "420",
						categoryTitle : "五城同创",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "421",
						categoryTitle : "公告公示",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "422",
						categoryTitle : "政务动态",
						categoryIconUrl : "resources/icons/02.png",
					}, ],
			}, {
				categoryTitle : "服务中心",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "423",
						categoryTitle : "县长信箱",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "424",
						categoryTitle : "招标公告",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "425",
						categoryTitle : "中标公告",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "426",
						categoryTitle : "办理指南",
						categoryIconUrl : "resources/icons/02.png",
					}, ],
			}, {
				categoryTitle : "市民热线",
				categoryIconUrl : "resources/icons/02.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "427",
						categoryTitle : "建言献策",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "428",
						categoryTitle : "我要写信",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "429",
						categoryTitle : "信息公开",
						categoryIconUrl : "resources/icons/02.png",
					}, {
						categoryId : "430",
						categoryTitle : "我要查询",
						categoryIconUrl : "resources/icons/02.png",
					}, ],
			}, ],
	}, {
		categoryTitle : "茶叶",
		categoryIconUrl : "resources/icons/03.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "431",
				categoryTitle : "茶业动态",
				categoryIconUrl : "resources/icons/03.png",
			}, {
				categoryId : "432",
				categoryTitle : "茶技推广",
				categoryIconUrl : "resources/icons/03.png",
			}, {
				categoryTitle : "供应信息",
				categoryIconUrl : "resources/icons/03.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "433",
						categoryTitle : "查看供应信息",
						categoryIconUrl : "resources/icons/03.png",
					}, {
						categoryTitle : "发布供应信息",
						categoryIconUrl : "resources/icons/03.png",
						categoryStyle : "publishView",
						categoryId : "433",
					}, ],
			}, {
				categoryTitle : "求购信息",
				categoryIconUrl : "resources/icons/03.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "462",
						categoryTitle : "查看求购信息",
						categoryIconUrl : "resources/icons/03.png",
					}, {
						categoryTitle : "发布求购信息",
						categoryIconUrl : "resources/icons/03.png",
						categoryStyle : "publishView",
						categoryId : "462",
					}, ],
			}, {
				categoryId : "434",
				categoryTitle : "专家在线",
				categoryIconUrl : "resources/icons/03.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "434",
						categoryTitle : "问题列表",
						categoryIconUrl : "resources/icons/03.png",
					}, {
						categoryTitle : "在线提问",
						categoryIconUrl : "resources/icons/03.png",
						categoryStyle : "publishView",
						categoryId : "434",
					}, {
						categoryTitle : "专家列表",
						categoryIconUrl : "resources/icons/03.png",
						categoryStyle : "expertView",
					}, ],
			}, ],
	}, {
		categoryTitle : "旅游",
		categoryIconUrl : "resources/icons/04.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "436",
				categoryTitle : "景点介绍",
				categoryIconUrl : "resources/icons/04.png",
			}, {
				categoryId : "437",
				categoryTitle : "旅游信息",
				categoryIconUrl : "resources/icons/04.png",
			}, {
				categoryTitle : "服务咨询",
				categoryIconUrl : "resources/icons/04.png",
				categoryStyle : "parentCategory",
				childCategory : [{
						categoryId : "438",
						categoryTitle : "吃在英山",
						categoryIconUrl : "resources/icons/04.png",
					}, {
						categoryId : "439",
						categoryTitle : "住在英山",
						categoryIconUrl : "resources/icons/04.png",
					}, {
						categoryId : "440",
						categoryTitle : "游在英山",
						categoryIconUrl : "resources/icons/04.png",
					}, {
						categoryId : "441",
						categoryTitle : "娱在英山",
						categoryIconUrl : "resources/icons/04.png",
					}, ],
			}, ],
	}, {
		categoryTitle : "招商",
		categoryIconUrl : "resources/icons/05.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "442",
				categoryTitle : "投资英山",
				categoryIconUrl : "resources/icons/05.png",
			}, {
				categoryId : "443",
				categoryTitle : "招商项目",
				categoryIconUrl : "resources/icons/05.png",
			}, {
				categoryId : "444",
				categoryTitle : "服务指南",
				categoryIconUrl : "resources/icons/05.png",
			}, {
				categoryId : "445",
				categoryTitle : "优惠政策",
				categoryIconUrl : "resources/icons/05.png",
			}, ],
	}, {
		categoryTitle : "科技",
		categoryIconUrl : "resources/icons/06.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "446",
				categoryTitle : "科技动态",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "447",
				categoryTitle : "民生科技",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "448",
				categoryTitle : "特色产业",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "449",
				categoryTitle : "科技创新",
				categoryIconUrl : "resources/icons/06.png",
			}, {
				categoryId : "450",
				categoryTitle : "科技在线",
				categoryIconUrl : "resources/icons/06.png",
			}, ],
	}, {
		categoryId : "",
		categoryTitle : "卫生",
		categoryIconUrl : "resources/icons/07.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryId : "451",
				categoryTitle : "卫生快讯",
				categoryIconUrl : "resources/icons/07.png",
			}, {
				categoryId : "452",
				categoryTitle : "档案查询",
				categoryIconUrl : "resources/icons/07.png",
				categoryStyle : "webUrl",
				webUrl : "http://219.139.49.58:8888/health/website/web_index_sj.action",
			}, {
				categoryId : "453",
				categoryTitle : "健康知识",
				categoryIconUrl : "resources/icons/07.png",
			}, {
				categoryId : "454",
				categoryTitle : "政策法规",
				categoryIconUrl : "resources/icons/07.png",
			}, {
				categoryId : "455",
				categoryTitle : "医疗推介",
				categoryIconUrl : "resources/icons/07.png",
			}, ],
	}, {
		categoryTitle : "生活",
		categoryIconUrl : "resources/icons/08.png",
		categoryStyle : "parentCategory",
		childCategory : [{
				categoryTitle : "常用号码",
				categoryIconUrl : "resources/icons/08.png",
				categoryStyle : "customHtml",
				customHtml : "<table width=\"100%\"border=\"0\"><tr><td>●</td><td>匪警</td><td><a href=\"tel:110\">110</a></td></tr><tr><td>●</td><td>火警</td><td><a href=\"tel:119\">119</a></td></tr><tr><td>●</td><td>急救中心</td><td><a href=\"tel:120\">120</a></td></tr><tr><td>●</td><td>交通事故</td><td><a href=\"tel:122\">122</a></td></tr><tr><td>●</td><td>水上求救专用</td><td><a href=\"tel:12395\">12395</a></td></tr><tr><td>●</td><td>天气预报</td><td><a href=\"tel:12121\">12121</a></td></tr><tr><td>●</td><td>报时服务</td><td><a href=\"tel:12117\">12117</a></td></tr><tr><td>●</td><td>森林火警</td><td><a href=\"tel:12119\">12119</a></td></tr><tr><td>●</td><td>红十字会急救台</td><td><a href=\"tel:999\">999</a></td></tr><tr><td>●</td><td>招商银行</td><td><a href=\"tel:95555\">95555</a></td></tr><tr><td>●</td><td>中国银行</td><td><a href=\"tel:95566\">95566</a></td></tr><tr><td>●</td><td>建设银行</td><td><a href=\"tel:95533\">95533</a></td></tr><tr><td>●</td><td>工商银行</td><td><a href=\"tel:95588\">95588</a></td></tr><tr><td>●</td><td>中信银行</td><td><a href=\"tel:95558\">95558</a></td></tr><tr><td>●</td><td>农业银行</td><td><a href=\"tel:95599\">95599</a></td></tr><tr><td>●</td><td>民生银行</td><td><a href=\"tel:95568\">95568</a></td></tr><tr><td>●</td><td>光大银行</td><td><a href=\"tel:95595\">95595</a></td></tr><tr><td>●</td><td>交通银行</td><td><a href=\"tel:95559\">95559</a></td></tr><tr><td>●</td><td>广发银行</td><td><a href=\"tel:95508\">95508</a></td></tr><tr><td>●</td><td>浦发银行</td><td><a href=\"tel:95528\">95528</a></td></tr><tr><td>●</td><td>深发银行</td><td><a href=\"tel:95501\">95501</a></td></tr><tr><td>●</td><td>华夏银行</td><td><a href=\"tel:95577\">95577</a></td></tr><tr><td>●</td><td>兴业银行</td><td><a href=\"tel:95561\">95561</a></td></tr><tr><td>●</td><td>中国移动客服</td><td><a href=\"tel:10086\">10086</a></td></tr><tr><td>●</td><td>中国联通客服</td><td><a href=\"tel:10010\">10010</a></td></tr><tr><td>●</td><td>中国电信客服</td><td><a href=\"tel:10000\">10000</a></td></tr><tr><td>●</td><td>中国移动IP号码</td><td><a href=\"tel:17951\">17951</a></td></tr><tr><td>●</td><td>中国联通IP号码</td><td><a href=\"tel:17911\">17911</a></td></tr><tr><td>●</td><td>中国电信IP号码</td><td><a href=\"tel:17900\">17900</a></td></tr><tr><td>●</td><td>电话及长途区号查询</td><td><a href=\"tel:114\">114</a></td></tr><tr><td>●</td><td>供电局</td><td><a href=\"tel:95598\">95598</a></td></tr><tr><td>●</td><td>文化市场综合执法</td><td><a href=\"tel:12318\">12318</a></td></tr><tr><td>●</td><td>消费者申诉举报</td><td><a href=\"tel:12315\">12315</a></td></tr><tr><td>●</td><td>价格监督举报</td><td><a href=\"tel:12358\">12358</a></td></tr><tr><td>●</td><td>质量监督电话</td><td><a href=\"tel:12365\">12365</a></td></tr><tr><td>●</td><td>机构编制违规举报热线</td><td><a href=\"tel:12369\">12369</a></td></tr><tr><td>●</td><td>民工维权热线电话</td><td><a href=\"tel:12333\">12333</a></td></tr><tr><td>●</td><td>税务局通用电话</td><td><a href=\"tel:12366\">12366</a></td></tr><tr><td>●</td><td>中国人保</td><td><a href=\"tel:95518\">95518</a></td></tr><tr><td>●</td><td>中国人寿</td><td><a href=\"tel:95519\">95519</a></td></tr><tr><td>●</td><td>中国平安</td><td><a href=\"tel:95511\">95511</a></td></tr><tr><td>●</td><td>太平洋保险</td><td><a href=\"tel:95500\">95500</a></td></tr><tr><td>●</td><td>泰康人寿</td><td><a href=\"tel:95522\">95522</a></td></tr><tr><td>●</td><td>新华人寿</td><td><a href=\"tel:95567\">95567</a></td></tr></table>",
			}, {
				categoryId : "456",
				categoryTitle : "话费查询",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "457",
				categoryTitle : "房产信息",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "458",
				categoryTitle : "求职招聘",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "459",
				categoryTitle : "停电停水公告",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "460",
				categoryTitle : "同城交友",
				categoryIconUrl : "resources/icons/08.png",
			}, {
				categoryId : "461",
				categoryTitle : "应用汇",
				categoryIconUrl : "resources/icons/08.png",
			}, ],
	}, ];
