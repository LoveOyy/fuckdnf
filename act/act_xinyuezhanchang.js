Act.register("xinyuezhanchang",
function(QQ) {
	function Act(QQ) {

		this.QQ = QQ;

	};
	Act.prototype = {
		name: "心悦俱乐部-荣耀战场",
		bindArea: function(area, role) {
			var _e;
			_e = this;
			$.ajax({
				type: 'GET',
				url: "http://comm.aci.game.qq.com:8848/main?game=dnf&area=" + area + "&callback=0&sCloudApiName=ams.gameattr.role&iAmsActivityId=54842&sServiceDepartment=xinyue",
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
				url: "http://apps.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=dnf&iActivityId=54842&sServiceDepartment=xinyue&set_info=xinyue&sSDID=57c45b8011bbe51c8258dd00cca12a07&isXhrPost=true",
				data: "iActivityId=54842&iFlowId=280302&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20170410zqsj%252F&xhr=1&sServiceDepartment=xinyue&sServiceType=dnf&sArea=" + area + "&sPartition=" + area + "&sRoleId=" + role + "&md5str=" + _e.md5str + "&ams_checkparam=" + _e.checkparam + "&checkparam=" + _e.checkparam + "&xhrPostKey=xhr_1505283973343",
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
			iFlowId = o.id;
			
			iActivityId = "54842";
			var _e;
			_e = this;
			_e.getGoodsOk = false;
			_e.Msg = "未知错误";
			var o;
			_o = o;
			$.ajax({
				type: 'POST',
				url: "http://apps.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=" + iActivityId + "&sServiceDepartment=xinyue&set_info=xinyue&sSDID=57c45b8011bbe51c8258dd00cca12a07&isXhrPost=true",
				data: "iActivityId=" + iActivityId + "&iFlowId=" + iFlowId + "&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=&xhr=1&sServiceDepartment=xinyue&sServiceType=tgclub&xhrPostKey=xhr_1505287977212",
				success: function(data, status, xhr) {
					if (data.ret == 0) {
						_e.getGoodsOk = true;
						_e.Msg = o.good_name;
					} else {
						_e.getGoodsOk = false;
						_e.Msg = data.flowRet.sMsg;
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
			_e.task_list_ids = {
				1 : {
					280445 : 282029,
					280648 : 282042,
					280649 : 282043,
					280499 : 282045,
					280664 : 282046,
					280666 : 282048,
					280463 : 282099,
					280660 : 282101,
					280663 : 282104,
					280505 : 282110,
					280670 : 282111,
					280671 : 282112,
					280631 : 282115,
					280706 : 282117,
					280721 : 282118,
					319571 : 319572,
					319591 : 319605,
					319617 : 319619,
					319629 : 319646,
					319630 : 319647,
					319631 : 319648,
					327341 : 327342,
				},
				2 : {
					280445 : 282344,
					280648 : 282346,
					280649 : 282348,
					280499 : 282360,
					280664 : 282355,
					280666 : 282356,
					280463 : 282354,
					280660 : 282357,
					280663 : 282359,
					280505 : 282361,
					280670 : 282362,
					280671 : 282363,
					280631 : 282364,
					280706 : 282369,
					280721 : 282372,
					319571 : 319578,
					319591 : 319611,
					319617 : 319621,
					319629 : 319722,
					319630 : 319724,
					319631 : 319726,
					327341 : 327343,
				}
			};

			$.ajax({
				type: 'POST',
				url: "http://apps.game.qq.com:8848/ams/ame/ame.php?ameVersion=0.3&sServiceType=tgclub&iActivityId=54842&sServiceDepartment=xinyue&set_info=xinyue&sSDID=57c45b8011bbe51c8258dd00cca12a07&isXhrPost=true",
				data: "iActivityId=54842&iFlowId=280926&g_tk=" + _e.QQ.g_tk + "&e_code=0&g_code=0&eas_url=http%253A%252F%252Fxinyue.qq.com%252Fact%252Fpc%252Fa20160623dnfryzc%252F&eas_refer=&xhr=1&sServiceDepartment=xinyue&sServiceType=tgclub&xhrPostKey=xhr_1505287977212",
				success: function(data, status, xhr) {

					var map = JSON.parse(data.modRet.jData.data);
					arr = [];
					for (i in map) {
						_t = {}; //正常
						_t.rule_name = map[i].task_name + "【正常】";
						_t.good_name = map[i].score + "成就点数";
						_t.type = (map[i].status==1)?true:false;
						_t.id = map[i].id;
						arr.push(_t);
						
						_t = {}; //免做
						_t.rule_name = map[i].task_name + "【免做卡】";
						_t.good_name = map[i].score + "成就点数";
						_t.id = _e.task_list_ids[1][map[i].id];
						_t.type = (map[i].status==1)?true:false;
						arr.push(_t);
						
						_t = {}; //双倍
						_t.rule_name = map[i].task_name + "【双倍卡】";
						_t.good_name = (map[i].score * 2) + "成就点数";
						_t.id = _e.task_list_ids[2][map[i].id];
						_t.type = (map[i].status==1)?true:false;
						arr.push(_t);
						
					
						
						
					}

					_e.rules = arr;

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
			return this.rules;

		}
	};
	return new Act(QQ);
});