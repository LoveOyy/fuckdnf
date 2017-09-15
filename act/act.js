Act = {
	map:{},
	register:function(name,func){
		this.map[name] = func;
	},
	get:function(name,QQ){
		var obj = {};
		obj.__proto__ = this.map[name](QQ);
		return obj;
		
	}
	
	
};