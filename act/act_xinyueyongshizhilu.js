Act.register("xinyueyongshizhilu",
function(QQ) {
	function Act(QQ) {

		this.QQ = QQ;

	};
	Act.prototype = {
		name: "心悦-勇士之路",
		bindArea: function(area, role,area_name,role_name) {
			var _e;
			
			_e = this;
			this.area = area;
			this.role = role;
			this.area_name = area_name;
			this.role_name = role_name;
			
			$.ajax({
				type: 'GET',
				url: "http://comm.aci.game.qq.com:8848/main?game=dnf&area="+area+"&callback=0&sCloudApiName=ams.gameattr.role&iAmsActivityId=117729&sServiceDepartment=xinyue",
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
				url: "http://comm.ams.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=dnf&iActivityId=117729&sServiceDepartment=xinyue&sSDID=354212e73a50f672f8b1c6609822b421&isXhrPost=true",
				data: "sAreaName="+encodeURI(area_name)+"&sRoleName="+encodeURI(role_name)+"&iActivityId=117729&iFlowId=383132&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20170410zqsj%252F&xhr=1&sServiceDepartment=xinyue&sServiceType=dnf&sArea=" + area + "&sPartition=" + area + "&sRoleId=" + role + "&md5str=" + _e.md5str + "&ams_checkparam=" + _e.checkparam + "&checkparam=" + _e.checkparam + "&xhrPostKey=xhr_1505283973343",
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
			var _e;
			_e = this;
			$.ajax({
				type: 'POST',
				url: "http://comm.ams.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=117729&sServiceDepartment=xinyue&sSDID=354212e73a50f672f8b1c6609822b421&isXhrPost=true",
				data: "gameId=&sArea=&iSex=&sRoleId=&iGender=&luopan=&worldid="+this.area+"&sServiceType=tgclub&objCustomMsg=&areaname=&roleid=&rolelevel=&rolename=&areaid=&iActivityId=117729&iFlowId="+o.id+"&g_tk="+_e.QQ.g_tk+"&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20170706dnf%252F&eas_refer=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20170410zqsj%252F&xhr=1&sServiceDepartment=xinyue&xhrPostKey=xhr_1505450584984",
				success: function(data, status, xhr) {
					if(data.ret == 0){
						localStorage[o.times_key] = true;
						_e.getGoodsOk = true;
						_e.Msg = o.goods;
					}else{
						if(data.ret == 600){ //已领取
							localStorage[o.times_key] = true;
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
			return [_e.getGoodsOk, _e.Msg];
		}, 
		getRule: function() {
			var _e;
			_e = this;
			_e.goods = {
				weekTest:{
					goods:"魔界抗疲劳秘药5点*6",
					id:"383114",
					rule:"完成每周一测"
				},
				1:{
					goods:"深渊派对通行证*6,魔界抗疲劳秘药5点*6,荣耀战场成就20点",
					id:"383828",
					rule:"每周一测评分达到S"
				},
				2:{
					goods:"深渊派对通行证*3,魔界抗疲劳秘药5点*6,荣耀战场成就10点",
					id:"383825",
					rule:"每周一测评分达到A"
				},
				s4:{
					goods:"深渊派对通行证*6,装备品级调整箱*6,荣耀战场成就30点",
					id:"383829",
					rule:"每月领取4次S的用户"
				}
				
				
				
			}
			$.ajax({
					type: 'POST',
					url: "http://comm.ams.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=117729&sServiceDepartment=xinyue&sSDID=354212e73a50f672f8b1c6609822b421&isXhrPost=true",
					data: "worldid="+this.area+"&iActivityId=" + "117729" + "&iFlowId=" + "391325" + "&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=http%3A%2F%2Fxinyue.qq.com%2Fact%2Fpc%2Fa20170410zqsj%2F&xhr=1&sServiceDepartment=xinyue&sServiceType=tgclub&xhrPostKey=xhr_1505287977212",
					success: function(data, status, xhr) {
						_e.user_level = data.modRet.jData.resultData.ilevel;
						
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
			_rules = [];
			_t = {}; //测评礼包
			_t.rule_name = this.goods.weekTest.rule;
			_t.good_name = this.goods.weekTest.goods;
			_t.id = this.goods.weekTest.id;
			_t.times_key = this.name+"_week_"+getWeek()+this.QQ.qq;
			if(localStorage[this.name+"_week_"+getWeek()+this.QQ.qq] == undefined){
				_t.type = false;
			}else{
				_t.type = true;
			}
			_rules.push(_t);
			if(this.goods[this.user_level] != undefined){ //等阶礼包
				_t = {}; //等阶礼包
				_t.rule_name = this.goods[this.user_level].rule;
				_t.good_name = this.goods[this.user_level].goods;
				_t.id = this.goods[this.user_level].id;
				_t.times_key = this.name+"_week2_"+getWeek()+this.QQ.qq;
				if(localStorage[this.name+"_week2_"+getWeek()+this.QQ.qq] == undefined){
					_t.type = false;
				}else{
					_t.type = true;
				}
				_rules.push(_t);
			}
			if(this.user_level == 1){ //S4礼包
				_t = {}; //S4礼包
				_t.rule_name = this.goods['s4'].rule;
				_t.good_name = this.goods['s4'].goods;
				_t.id = this.goods['s4'].id;
				_t.times_key = this.name+"_month_"+getMonth()+this.QQ.qq;
				if(localStorage[this.name+"_month_"+getMonth()+this.QQ.qq] == undefined){
					_t.type = false;
				}else{
					_t.type = true;
				}
				_rules.push(_t);
			}
			
			this.rules = _rules;
			
			return this.rules;

		}
	};
	return new Act(QQ);
});