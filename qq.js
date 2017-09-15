	var QQ = function(){}
	QQ.prototype={
		toString:function(){ //打包
			_build = {}
			for(i in this){
			
				if(typeof this[i] == "function" ||  i == "dnf"){
					continue;
				}
				
				_build[i] = this[i]
				

			}
			return JSON.stringify(_build);
		},
		Init: function(qq,password){
			this.qq = qq;
			this.password = password;
			this.cookie = {};
			_e = this;
			$.ajax({
				type: 'GET',
				url: "http://ui.ptlogin2.qq.com:8848/cgi-bin/login?hide_title_bar=0&low_login=0&qlogin_auto_login=1&no_verifyimg=1&link_target=blank&appid=636014201&target=self&s_url=http%3A//www.qq.com/qq2012/loginSuccess.htm",
				success: function(data,status,xhr){
					cookie = JSON.parse(xhr.getResponseHeader("cookie"));
					window.xhr = xhr;
					$.extend(_e.cookie,cookie);
					_e.pt_login_sig = cookie.pt_login_sig;
				},
				dataType: "html"
			});
		},
		IsNeedCode: function(){
			_e = this;
			$.ajax({
				type: 'GET',
				url: "http://check.ptlogin2.qq.com:8848/check?regmaster=&pt_tea=1&pt_vcode=1&uin="+this.qq+"&appid=549000912&js_ver=10194&js_type=1&login_sig=&u1=http%3A%2F%2Fqzs.qq.com%2Fqzone%2Fv5%2Floginsucc.html%3Fpara%3Dizone&r=0.1234567812345678&pt_uistyle=40",
				success: function(data,status,xhr){
					cookie = JSON.parse(xhr.getResponseHeader("cookie"));
					$.extend(_e.cookie,cookie);
					re = eval(data);
					
					_e.verifysession = re.param4;
					_e.cap_cd = re.param2;
					_e.vcode = re.param2;
					if(re.param1 == 0){
						_e.needCode = false;
					}else{
						_e.needCode = true;
					}
					
				},
				dataType: "html"
			});
			
			return this.needCode;
		},
		LoadImg:function(){
			_e = this;
			$.ajax({
				type: 'GET',
				url: "http://captcha.qq.com:8848/cap_union_new_gettype?aid=549000912&asig=&captype=&protocol=http&clientype=2&disturblevel=&apptype=2&curenv=inner&uid="+this.qq+"&cap_cd="+this.cap_cd+"&lang=2052&callback=imgInit",
				success: function(data,status,xhr){
					cookie = JSON.parse(xhr.getResponseHeader("cookie"));
					$.extend(_e.cookie,cookie);
					
					_e.sess = eval(data);
					
					console.log(_e)
				},
				dataType: "html"
			});

			$.ajax({
				type: 'GET',
				url: "http://captcha.qq.com:8848/cap_union_new_show?aid=549000912&asig=&captype=&protocol=http&clientype=2&disturblevel=&apptype=2&curenv=inner&sess="+this.sess+"&noBorder=noborder&showtype=embed&uid="+this.qq+"&cap_cd="+this.cap_cd+"&lang=2052&rnd=245959",
				success: function(data,status,xhr){
					cookie = JSON.parse(xhr.getResponseHeader("cookie"));
					$.extend(_e.cookie,cookie);
					_e.vsig = getMidStr(data,',_="','"');
					_e.codeType = getMidStr(data,'cdata:n,"','"');
					_e.websig = getMidStr(data,'websig:"','"');
					
					
				},
				dataType: "html"
			});	
			console.log("123")
			return "http://captcha.qq.com:8848/cap_union_new_getcapbysig?aid=636014201&asig=&captype=&protocol=http&clientype=2&disturblevel=&apptype=2&curenv=inner&sess="+this.sess+"&theme=&noBorder=noborder&fb=1&showtype=embed&uid="+this.qq+"&cap_cd="+this.cap_cd+"&lang=2052&rnd=457925&rand=0.6630907981496095&vsig="+this.vsig+"&ischartype=1";
		},
		NoCodeLogin:function(){
	
			_e = this;
			$.ajax({
				type: 'GET',
				url: "http://ptlogin2.qq.com:8848/login?u="+this.qq+"&verifycode="+this.vcode+"&pt_vcode_v1=0&pt_verifysession_v1="+this.verifysession+"&p="+getEncryption(this.password,this.qq, this.vcode)+"&pt_randsalt=2&u1=http%3A%2F%2Fqzs.qq.com%2Fqzone%2Fv5%2Floginsucc.html%3Fpara%3Dizone&ptredirect=0&h=1&t=1&g=1&from_ui=1&ptlang=2052&action=3-25-1479352294480&js_ver=10180&js_type=1&login_sig="+this.pt_login_sig+"&pt_uistyle=40&aid=549000912&daid=5&",
				success: function(data,status,xhr){
					cookie = JSON.parse(xhr.getResponseHeader("cookie"));
					$.extend(_e.cookie,cookie);
					re = eval(data);
					if(re.type == 0){
						_e.isLogin = true;
						_e.name = re.name;
					}else{
						_e.isLogin = false;
					}
					
				},
				dataType: "html"
			});
			return this.isLogin;
		},
		CheckCode:function(code){
			_e = this;
			$.ajax({
				type: 'GET',
				url: "http://captcha.qq.com:8848/cap_union_new_verify?random=荒古遗精宝典"+"&websig="+this.websig+"&aid=549000912&asig=&captype=&protocol=http&clientype=2&disturblevel=&apptype=2&curenv=inner&sess="+this.sess+"&noBorder=noborder&showtype=embed&uid="+this.qq+"&cap_cd="+this.cap_cd+"&lang=2052&rnd=245959&subcapclass=0&vsig="+this.vsig+"&cdata=0&"+_e.codeType+"=OD6q9t0AraWJf+dtq0j8VuqazXEXy4e+drorJzyJ8EZGLXsHqgXipxoIv6cyQ0dWLgasmhivu279Mp9YZfOJSkb32Mo5MiGYkCN0l3qM0AW27J6EbkwdkcfODDnDlSpbSfkhAjHUFLb1AavjeUaIfl9+21cwuovyiI/bzjmV71+PwDcpQpJ30xqk8p0YiXOU/lqDJYyptYzYqQHd4NGYYwYdvpOVd1i4++ixSDIm8g5jYitVzgEtEC3H0pRfsRSPqfdd2TAyJUpDbd0q8MI7PQaF1L4AijAkxldvQM6Xq/OEqIrRCQ7NInMqiIxsh/VPww3PPwfjCKQrVeGWKgUC4rM6Qry4588SN7imaLaJudQBLhPggKv7kTULDPS8fWptQ7O1uG2n91kqnFtg9tVERrsjKY0Pe7XJ/VXLCv20nXtM3twWmX2JD4nl81oyXxfeExfWPst5z2Wodn4/BBjPJOM3XaUOQisaTkFFh9AB7XY/UjnTVIDP3BbyQEf5iFAMeLXW5Y/XkNoKUUsCzcDvUmC7z7MzPxyYvwOUC668erR4kV3I3wAS8zo5RBZdNsjKeVNl+bk+iIyRds3cPaGRan2C4Yhu9SJgr6fBAm7oFuayw85RWSx0H4UDw7uFMvQ/Diufr7Rx7UbhnyGZLm1yrsZ88rvc1vg7RmyZKfphpowtIsDXzA0lsuF4ZF30vo8NFSz+KepSBng+wxzB6JW5Vno1yY6/0QdxgOIU8dh7dHTfkmzfJu7dvKjmOXMtZwlccf71BuLeNRaiSRDolMmTCu+LdEU/QsxqpzFLyrjv/DwxeLQxant5w93cbpD/ecEFz6N+2I8+VpywRKM+7OvTlb08AyiY+NN45gQVbNNdPGa3Nmj0sZoMF12mgW+eeKnGTA+Iz7LQPh6OVw7wfpuaMy/HuBdXrtlcloC+F+IK8+ZMJyvR4PiM3oF5MysI77EMhQWsM3VpgNMGCzt9TRvDDnD37pVFkaGajHajV5dECZLQ9Vx5ZF9tAH98KhPLsjqWdKdroGwMfHc10D0vVnKAjtalAnlkrGPblBtznsq6NzOhZQKv1ZG9Zb5gNAG8umyWw4ppSVP6zCj2Ujc4p94taeudDy7698EL2TDRwU9kGkdg6Bo5c4LfrMExISfIVSKKUMTMtcWhM/ta3queXuhuRE/mU4Nrm3xNGbnMtFSArnkEmfWvFQBWUIasGaPhXL0hKMId3FqT8Y9jqlDI4j3UTNF4N+PrELZfuCT8L69GPLwPfzlUOEufQkE3dFGF0CQXBrMi/z1YvOx8WOuLAZ1pP3VYSWat+LFqvsTq2mbhvALnvotykaTYqLaoT2+86vezl4WcDIoFXzVzvbab1BAtQxt7iFSmLgXxt52sHVa5pcCGNrSXQhZG5SnhKOW6S316lWY8LhOYvhcQAAiAa3nLyDqlr62kz3BLErLqlQhFOp/MMWYkz8E0yX05jjRjlfiG&ans="+code,
				success: function(data,status,xhr){
					cookie = JSON.parse(xhr.getResponseHeader("cookie"));
					$.extend(_e.cookie,cookie);
					re = JSON.parse(data);
					if(re.errorCode == 0){
						_e.checkCode = true;
						_e.verifysession = re.ticket;
						_e.vcode = re.randstr;
					}else{
						_e.checkCode = false;
					}
					
					
					
				},
				dataType: "html"
			});
			return this.checkCode;
		},
		Login:function(){
			_e = this;
			$.ajax({
				type: 'GET',
				url: "http://ptlogin2.qq.com:8848/login?u="+this.qq+"&verifycode="+this.vcode+"&pt_vcode_v1=1&pt_verifysession_v1="+this.verifysession+"&p="+getEncryption(this.password,this.qq,this.vcode)+"&pt_randsalt=2&u1=http%3A%2F%2Fqzs.qq.com%2Fqzone%2Fv5%2Floginsucc.html%3Fpara%3Dizone&ptredirect=0&h=1&t=1&g=1&from_ui=1&ptlang=2052&action=2-125-&js_ver=10194&js_type=1&login_sig="+this.pt_login_sig+"&pt_uistyle=40&aid=549000912&daid=5",
				success: function(data,status,xhr){
					cookie = JSON.parse(xhr.getResponseHeader("cookie"));
					$.extend(_e.cookie,cookie);
					re = eval(data);
					if(re.type == 0){
						_e.isLogin = true;
						_e.name = re.name;
					}else{
						_e.isLogin = false;
					}
					
				},
				dataType: "html"
			});
			return this.isLogin;
			
		},
		checkLogin:function(){
			
			_e = this;
			$.ajax({
				type: 'GET',
				url:"http://comm.aci.game.qq.com:8848/main?game=dnf&area=199&callback=0&sCloudApiName=ams.gameattr.role&iAmsActivityId=54842&sServiceDepartment=xinyue",
				success: function(data,status,xhr){
					eval(data);
					
					if(query_role_result_0.retCode == 0){
						_e.isLogin = true;
					}else{
						_e.isLogin = false;
					}
				},
				dataType: "html",
				beforeSend: function(request) {
					var i;
					cookeStr  = ""
					for (i in _e.cookie){
						cookeStr +=i+"="+_e.cookie[i]+"; "
							
					}
                    request.setRequestHeader("FUCKCOOKIE",cookeStr);
                }
				
			});
			
			
			
		}
		
	}

	
	
	function ptuiCB(type,param2,param3,param4,msg,name){
		var _return = {};
		_return.type = type;
		_return.param2 = param2;
		_return.param3 = param3;
		_return.param4 = param4;
		_return.msg = msg;
		_return.name = name;
		return _return;
	}
	
	function ptui_checkVC(param1,param2,param3,param4,param5){
		var _return = {};
		_return.param1 = param1;
		_return.param2 = param2;
		_return.param3 = param3;
		_return.param4 = param4;
		_return.param5 = param5;
		return _return;
	
	}
	function getMidStr(str,begin,after){
		start_len = begin.length;
		start = str.indexOf(begin);
		str2 =  str.substr(start+start_len,str.length-start);
		end = str2.indexOf(after);
		return str.substr(start+start_len,end);
		
	}
	function imgInit(e){

		return e.sess
	}