Act.register("xinyuelibao",
function(QQ) {
	function Act(QQ) {

		this.QQ = QQ;

	};
	Act.prototype = {
		name: "心悦-游戏权益",
		bindArea: function(area, role,area_name,role_name) {
			var _e;
			
			_e = this;
			this.area = area;
			this.role = role;
			this.area_name = area_name;
			this.role_name = role_name;
			
			$.ajax({
				type: 'GET',
				url: "http://comm.aci.game.qq.com:8848/main?game=dnf&area="+area+"&callback=0&sCloudApiName=ams.gameattr.role&iAmsActivityId=110177&sServiceDepartment=xinyue",
				success: function(data, status, xhr) {
					eval(data);
					_e.checkparam = query_role_result_0.checkparam;
					_e.md5str = query_role_result_0.md5str

				},
				beforeSend: function(request) {
					cookeStr = "";
					for (i in _e.QQ.cookie) {
						cookeStr += i + "=" + _e.QQ.cookie[i] + "; ";

					}
					request.setRequestHeader("FUCKCOOKIE", cookeStr);
				},
				dataType: "html"
			});
			$.ajax({
				type: 'POST',
				url: "http://comm.ams.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=dnf&iActivityId=110177&sServiceDepartment=xinyue&sSDID=80502a59a29637ed29c560f4b24d6080&isXhrPost=true",
				data: "iActivityId=110177&iFlowId=359770&g_tk="+_e.QQ.g_tk+"&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20170410zqsj%252F&eas_refer=&xhr=1&sServiceDepartment=xinyue&sServiceType=dnf&sArea="+_e.area+"&sPartition="+_e.area+"&sRoleId="+_e.role+"&sAreaName=&sRoleName=&md5str="+_e.md5str+"&ams_checkparam="+_e.checkparam+"&checkparam="+_e.checkparam+"&xhrPostKey=xhr_1505453672124",
				success: function(data, status, xhr) {
					console.log(data)
				},
				dataType: "html",
				beforeSend: function(request) {
					var i;

					cookeStr = "";
					for (i in _e.QQ.cookie) {
						cookeStr += i + "=" + _e.QQ.cookie[i] + "; ";

					}
					request.setRequestHeader("FUCKCOOKIE", cookeStr);
				}

			});
		},
		getGood: function(o) {
			
			iActivityId = "110177";
			var _e;
			_e = this;
			_e.getGoodsOk = false;
			_e.Msg = "未知错误";
			
			var o;
			_o = o;
			switch(o.good_type){
				case "week": //周礼包领取 
					$.ajax({
						type: 'GET',
						url: "http://apps.game.qq.com:8848/xyapp/pc/api/apply_package?callback=&gid=1&package_type=privilege&role_id="+this.role_id+"&package_id="+o.id+"&area="+this.area_id+"&_=1505354902565",
						success: function(data, status, xhr) {
							if(data.status == 1){
								localStorage[_e.name+"_week_"+getWeek()+_e.QQ.qq]  = true;
								_e.getGoodsOk = true;
								_e.Msg = _o.good_name;
							}else{
								if(data.message =="今日资格已耗尽，请下期再来！"){
									localStorage[_e.name+"_week_"+getWeek()+_e.QQ.qq]  = true;
								}
								_e.getGoodsOk = false;
								_e.Msg = data.message;
							}
						},
						dataType: "json",
						beforeSend: function(request) {
							var i;
							cookeStr = ""
							for (i in _e.QQ.cookie) {
								cookeStr += i + "=" + _e.QQ.cookie[i] + "; "
							}
							request.setRequestHeader("FUCKCOOKIE", cookeStr);
						}

					});
				case "month":
					$.ajax({
						type: 'POST',
						url: "http://apps.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=" + iActivityId + "&sServiceDepartment=xinyue&set_info=xinyue&sSDID=80502a59a29637ed29c560f4b24d6080&isXhrPost=true",
						data: "sType="+_o.sType+"&levelNames"+_o.id+"&iActivityId=" + "110177" + "&iFlowId=" + "359848" + "&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=&xhr=1&sServiceDepartment=xinyue&sServiceType=tgclub&xhrPostKey=xhr_1505287977212",
						success: function(data, status, xhr) {
								if(data.ret == 0){
									localStorage[_e.name+"_month_"+getMonth()+_e.QQ.qq]  = true;
									_e.getGoodsOk = true;
									_e.Msg = _o.good_name;
								}else{
									if(data.ret == 600){ //已领取
										localStorage[_e.name+"_month_"+getMonth()+_e.QQ.qq] = true;
									}
									_e.getGoodsOk = false;
									_e.Msg = data.msg;
								}
								
						},
						dataType: "json",
						beforeSend: function(request) {
							var i;
							cookeStr = ""
							for (i in _e.QQ.cookie) {
								cookeStr += i + "=" + _e.QQ.cookie[i] + "; "
							}
							request.setRequestHeader("FUCKCOOKIE", cookeStr);
						}

					});
				case "day":
					$.ajax({
						type: 'POST',
						url: "http://apps.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=" + iActivityId + "&sServiceDepartment=xinyue&set_info=xinyue&sSDID=80502a59a29637ed29c560f4b24d6080&isXhrPost=true",
						data: "iActivityId=" + "110177" + "&iFlowId=" + "359785" + "&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=&xhr=1&sServiceDepartment=xinyue&sServiceType=tgclub&xhrPostKey=xhr_1505287977212",
						success: function(data, status, xhr) {
							
						
								if(data.ret == 0){
									localStorage[_e.name+"_day_"+getDay()+_e.QQ.qq] = Number(localStorage[_e.name+"_day_"+getDay()+_e.QQ.qq])+1;
									_e.getGoodsOk = true;
									_e.Msg = data.modRet.sPackageName;
								}else{
									
									_e.getGoodsOk = false;
									_e.Msg = data.msg;
								}
								
						},
						dataType: "json",
						beforeSend: function(request) {
							var i;
							cookeStr = ""
							for (i in _e.QQ.cookie) {
								cookeStr += i + "=" + _e.QQ.cookie[i] + "; "
							}
							request.setRequestHeader("FUCKCOOKIE", cookeStr);
						}

					});
				
			}
			/*
			$.ajax({
				type: 'POST',
				url: "http://apps.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=" + iActivityId + "&sServiceDepartment=xinyue&set_info=xinyue&sSDID=57c45b8011bbe51c8258dd00cca12a07&isXhrPost=true",
				data: "iActivityId=" + iActivityId + "&iFlowId=" + iFlowId + "&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=&xhr=1&sServiceDepartment=xinyue&sServiceType=tgclub&xhrPostKey=xhr_1505287977212",
				success: function(data, status, xhr) {
					
				},
				dataType: "json",
				beforeSend: function(request) {
					var i;
					cookeStr = ""
					for (i in _e.QQ.cookie) {
						cookeStr += i + "=" + _e.QQ.cookie[i] + "; "
					}
					request.setRequestHeader("FUCKCOOKIE", cookeStr);
				}

			});
			*/
			return [_e.getGoodsOk, _e.Msg];
		},
		getRule: function() {
			var _e;
			_e = this;
			_e.weekGoods ={
				l4:{
					goods:"复活币×3,疲劳药5点×1,装备品级整箱×1,超级远古精灵秘药×1",
					id:695
				},
				ty:{
					goods:"复活币×5,疲劳药20点×1,装备品级整箱×1,超级远古精灵秘药×2",
					id:696
				},
				v1:{
					goods:"复活币×5,疲劳药30点×1,装备品级整箱×2,超级远古精灵秘药×2",
					id:697
				},
				v2:{
					goods:"复活币×5,疲劳药50点×1,装备品级整箱×3,超级远古精灵秘药×3,10%成长胶囊×1",
					id:698
				},
				v3:{
					goods:"复活币×10,疲劳药50点×1,装备品级整箱×5,超级远古精灵秘药×5,10%成长胶囊×5",
					id:699
				}
				
			}
			_e.monthGoods = {
				l4:{
					goodsA:"10%成长胶囊×5",
					goodsB:"深渊派对通行证×3",
					id:"l1,l2,l3,l4"
				},
				ty:{
					goodsA:"10%成长胶囊×8",
					goodsB:"深渊派对通行证×4",
					id:"tq"
				},
				v1:{
					goodsA:"升级券×1",
					goodsB:"深渊派对通行证×5",
					id:"v1"
				},
				v2:{
					goodsA:"升级券×2",
					goodsB:"深渊派对通行证×10",
					id:"v2"
				},
				v3:{
					goodsA:"升级券×3",
					goodsB:"深渊派对通行证×15",
					id:"v3"
				}
			}
			_e.xinyueName = {
				l4:"游戏家L4",
				ty:"特邀会员",
				v1:"心悦1",
				v2:"心悦2",
				v3:"心悦3"
			}
			$.ajax({
				type: 'POST',
				url: "http://apps.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=110177&sServiceDepartment=xinyue&set_info=xinyue&sSDID=80502a59a29637ed29c560f4b24d6080&isXhrPost=true",
				data: "iActivityId=110177&iFlowId=359772&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=&xhr=1&sServiceDepartment=xinyue&sServiceType=tgclub&xhrPostKey=xhr_1505287977212",
				success: function(data, status, xhr) {
						var point = data.modRet.sOutValue2; //心悦成长值
						var point = Math.max(parseInt(point), 0);
						var levelIndex = ['l0', 'l1','l2','l3','l4','v1','v2','v3'];
						var levelInfo = {
							l0: [0 , 1],
							l1: [1,1000],
							l2: [1000,5000],
							l3: [5000,10000],
							l4: [10000,50000],
							v1: [50000,100000],
							v2: [100000,800000],
							v3: [800000, 1500000]
							//v4: [1500000, 2000000], // fuck xinyue4 not found
						};
						point = Math.min(point, levelInfo.v3[0]);
						$.each(levelInfo, function(i, value){
						levelGrade = parseInt(getArrayKey(levelIndex,i));
							if(isInt(point, value[0], (value[1] - 1))){
								gap = value[1] - point;
								
								cur = i;
								return false
							}
						});
						if(data.modRet.sOutValue4 == "1"){
							cur ="ty";
						}
						
						_e.xy_type = cur;
				},
				dataType: "json",
				beforeSend: function(request) {
					var i;
					cookeStr = "";
					for (i in _e.QQ.cookie) {
						cookeStr += i + "=" + _e.QQ.cookie[i] + "; ";
					}
					request.setRequestHeader("FUCKCOOKIE", cookeStr);
				}

			});
			_rules = [];
			if(this.xinyueName[this.xy_type] != undefined){
				_t = {}; //周礼包
				_t.rule_name = this.xinyueName[this.xy_type] +"【周礼包】";
				_t.good_name = this.weekGoods[this.xy_type].goods;
				_t.id = this.weekGoods[this.xy_type].id;
				_t.good_type = "week";
				if(localStorage[this.name+"_week_"+getWeek()+this.QQ.qq] == undefined){
					//localStorage[this.name+"_week_"+getWeek()+this.QQ.qq]  = true;
					_t.type = false;
				}else{
					_t.type = true;
				}
				_rules.push(_t);
				
				_t = {}; //月礼包A
				_t.rule_name = this.xinyueName[this.xy_type] +"【月礼包A】";
				_t.good_name = this.monthGoods[this.xy_type].goodsA;
				_t.id = this.weekGoods[this.xy_type].id;
				_t.sType = "A";
				_t.good_type = "month";
				if(localStorage[this.name+"_month_"+getMonth()+this.QQ.qq] == undefined){
					//localStorage[this.name+"_month_"+getMonth()+this.QQ.qq]  = true;
					_t.type = false;
				}else{
					_t.type = true;
				}
				_rules.push(_t);
				
				
				_t = {}; //月礼包B
				_t.rule_name = this.xinyueName[this.xy_type] +"【月礼包B】";
				_t.good_name = this.monthGoods[this.xy_type].goodsB;
				_t.id = this.weekGoods[this.xy_type].id;
				_t.sType = "B";
				_t.good_type = "month";
				if(localStorage[this.name+"_month_"+getMonth()+this.QQ.qq] == undefined){
					//localStorage[this.name+"_month_"+getMonth()+this.QQ.qq]  = true;
					_t.type = false;
				}else{
					_t.type = true;
				}
				_rules.push(_t);
			}
			
			
			_t = {}; //每日抽奖
			_t.rule_name = "【每日抽奖】";
			_t.good_name = "根据人品而定";
			_t.id = "359785";
			_t.good_type = "day";
			_t.get_times = 1;
			if(this.xy_type == "ty" || this.xy_type == "v1" || this.xy_type == "v2" || this.xy_type == "v3" ){
				_t.get_times = 2;
			}
			if(localStorage[this.name+"_day_"+getDay()+this.QQ.qq] == undefined){
				localStorage[this.name+"_day_"+getDay()+this.QQ.qq] = 0;
				//localStorage[this.name+"_month_"+getMonth()+this.QQ.qq]  = true;
				_t.type = false;
			}else if(localStorage[this.name+"_day_"+getDay()+this.QQ.qq] == _t.get_times){
				_t.type = true;
			}
			_rules.push(_t);
			
			
			
			
			this.rules = _rules;
			
			return this.rules;

		}
	};
	return new Act(QQ);
});


function getWeek(){
	return (((new Date())-(new Date("1970-01-01")))/(24*60*60*7*1000)|0); 
	
}
function getMonth(){
	return (((new Date())-(new Date("1970-01-01")))/(24*60*60*30*1000)|0); 
	
}
function getDay(){
	return (((new Date())-(new Date("1970-01-01")))/(24*60*60*1*1000)|0);
	
}
function isInt(n, iMin, iMax){ //fuck milo
	if(!isFinite(n)) {
			return false;
		}
		if(!/^[+-]?\d+$/.test(n)) {
			return false;   
		}
		if(iMin!=undefined && parseInt(n)<parseInt(iMin)) {
			return false;
		}
		if(iMax!=undefined && parseInt(n)>parseInt(iMax)) {
			return false;
		}    
		return true;
	}
function getArrayKey(arr, value){ //fukc milo second time 
	var findKey = -1;
	if (isArray(arr) || isObject(arr))
		for(var key in arr){
			if (arr[key] == value) findKey = key;
		}
	return findKey;
	}
function isArray(obj) { //what the fuck 
	t = typeof obj; // fuck getParamType ?
	return t.toLowerCase() === "array";
}
function isObject(obj) { //what the fuck 
	t = typeof obj; // fuck getParamType ?
	return t.toLowerCase() === "object";
}