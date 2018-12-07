var endpoints = [
	{method: "POST", name: "getProduct", url: "/hello", data: { product : {
				colorSelected : 0,
				sizeSelected : 0,
				price: "$800.50",
				oldPrice: "$45.00",
				availability : "In Stock",
				brand: "E-SHOP",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				rating : 3,
				images : [{src:'./img/main-product01.jpg', color: 'rgb(71, 89, 132)' },{src:'./img/main-product02.jpg', color: 'rgb(138, 36, 84)'},{src:'./img/main-product03.jpg', color: 'rgb(191, 105, 137)'},{src:'./img/main-product04.jpg', color: 'rgb(154, 84, 216)'}],
				size : ['S','XL','SL']
				
	}}, dataErr: {status : "KO"}, props : ['props']},
	{method: "POST", name: "getProducts", url: "/hello", data: { product : [
	{
		productLabel : [{name : "New"},{name : "-20%"}],
		image : "./img/product01.jpg",
		price : "$32.50",
		oldPrice : "$620.50",
		productName : "Bags",
		rating : "5",
	},
	{
		productLabel : [{name : "New"},{name : "-20%"}],
		image : "./img/product01.jpg",
		price : "$32.50",
		oldPrice : "$62.50",
		productName : "Bags",
		rating : "5",
	},
	{
		productLabel : [{name : "New"},{name : "-20%"}],
		image : "./img/product01.jpg",
		price : "$32.50",
		oldPrice : "$62.50",
		productName : "Bags",
		rating : "5",
	}
	]}, dataErr: {status : "KO"}, props : ['props']},
]

function dispatch(something, prop){
	var fund = {};
	for(var i = 0; i < endpoints.length ; i++){
		if(endpoints[i].name == something){
			fund = endpoints[i]
			var postOK = false;
			for (var a = 0; a < endpoints[i].props.length; a++){
				for(var c = 0; c < Object.keys(prop).length; c++){
					if(endpoints[i].props[a] !== Object.keys(prop)[c]){
						return jQuery.ready.promise().then(data => {return fund.dataErr})
					}
				
				}
			}
		}
	}
	
	
	return jQuery.ready.promise().then(data => {return fund.data})
}

/*
* This part is for mock the calling to API
* @param func
* @param res
*/ 
function promise(func, res){
setTimeout(function(){func.then(dt => {res(dt)})},5000)
}

var store = {
    endpoint: {
		valueEndpoint : "product",
		setEndpoint : function(end){store.endpoint.valueEndpoint = end; return true},
	},
	loading : {
		valueLoader: false,
		getLoad : function(end){if(end === store.endpoint.valueEndpoint){return store} else {return false}},
		setLoad : function(){this.valueLoader = !this.valueLoader; return this.getLoad(store.endpoint.valueEndpoint)},
	},
	data : {
		dataValue : [],
		getData : function(end, func){if(end === store.endpoint.valueEndpoint){func(store)} else {return func([])}},
		reqData : function(props, init, func){ init(store.loading.setLoad()), promise(dispatch(store.endpoint.valueEndpoint, props), function(dt){store.data.setData(dt, func)})},
		setData : function(data, func){store.loading.setLoad(); this.dataValue = data; return this.getData(store.endpoint.valueEndpoint, func)},
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