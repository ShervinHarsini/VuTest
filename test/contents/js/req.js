var endpoints = [
	{method: "GET", name: "getProducts", url: "http://localhost/test/zgf0yq.php?uri=/c2VhcmNo/"},
	{method: "GET", name: "getProduct", url: "http://localhost/test/zgf0yq.php?uri=/cHJvZHVjdA/"},
	{method: "GET", name: "login", url: "http://localhost/test/zgf0yq.php?uri=/login/"},
	{method: "GET", name: "save", url: "http://localhost/test/zgf0yq.php?uri=/save/"},
]

function dispatch(something, prop){
	var fund = endpoints.filter(function(enp){ return enp.name === something})[0]
	return {fund : fund, prop : prop}
}

/*
* This part is for mock the calling to API
* @param func
* @param res
*/ 
function promise(func, res){
	$.get( func.fund.url + func.prop , func.prop )
	  .done(function( data ) {
		res(data);
	  });
}

var store = {
    endpoint: {
		valueEndpoint : "product",
		setEndpoint : function(end){store.endpoint.valueEndpoint = end; return true},
	},
	data : {
		dataValue : [],
		getData : function(end, func){if(end === store.endpoint.valueEndpoint){func(store)} else {return func([])}},
		reqData : function(props, init, func){ init(), promise(dispatch(store.endpoint.valueEndpoint, props), function(dt){store.data.setData(dt, func)})},
		setData : function(data, func){this.dataValue = data; return this.getData(store.endpoint.valueEndpoint, func)},
	},
	start : function(props, init, func) {this.data.reqData(props, init, func)}
}

function disp(end){
	if(end !== undefined){
		store.endpoint.setEndpoint(end)
	}
	return store 
}

var VueProvider = {};  
function install (Vue) { 
  Vue.prototype.providerService = disp;
}
VueProvider.install = install;

//disp("getProduct").data.reqData({props : 25}, function(store){console.log(store.loading.valueLoader)}, function(store){console.log(store.loading.valueLoader);console.log(store.data.dataValue)})