ACCOUNT = function(){
	
	if(localStorage.userJson == undefined){
		localStorage.userJson = "{}";
	}

};
ACCOUNT.first = true;
ACCOUNT.Save = function(QQ){
	if(QQ.qq == undefined){ 
		return false;
	}
	User = JSON.parse(localStorage.userJson);
	User[QQ.qq] = JSON.parse(QQ.toString());
	localStorage.userJson = JSON.stringify(User);

}
ACCOUNT.Get = function(qq){
	
	User = JSON.parse(localStorage.userJson);
	_t = User[qq]; 
	_t.__proto__ = new QQ;
	return _t;


}
ACCOUNT.Delete = function(qq){
	
	User = JSON.parse(localStorage.userJson);
	delete User[qq];
	localStorage.userJson = JSON.stringify(User);


}
ACCOUNT.List = function(){
	
	if(this.first){ //可能有的账号cookie失效   tencent safe dog
		arr = JSON.parse(localStorage.userJson);
		_tmp = [];
		for(i in arr){
			var i;
			arr[i].__proto__ = new QQ;
			arr[i].checkLogin();
			ACCOUNT.Save(arr[i]);
			
		}
		this.first = false;
	}
	
	
	
	arr = JSON.parse(localStorage.userJson);
	_tmp = [];
	for(i in arr){
		
		_tmp.push(arr[i]);
		
	}
	console.log(_tmp);
	return  _tmp;
}
ACCOUNT();