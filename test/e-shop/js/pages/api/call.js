	function showAlert(message, duration){
	$('body').append('<div class="alert alert-success" id="passwordsNoMatchRegister" role="alert" style="display:none;" >'+message+'</div>')
	setTimeout(function(){	
	$('#passwordsNoMatchRegister').css({'opacity' : 1, 'display': 'block'});
	setTimeout(function(){$('#passwordsNoMatchRegister').css({'opacity' : 0});hide()},duration)
	function hide (){
	setTimeout(function(){$('#passwordsNoMatchRegister').css({'display' : 'none'});
	$(".alert").remove()
	},1000)
	}
	},1000)
	}
	window.showAlert = showAlert;


 
  var urls = {
	 '/prodotto/2' : {
			product : {
				colorSelected : 0,
				sizeSelected : 0,
				price: "$80.50",
				oldPrice: "$45.00",
				availability : "In Stock",
				brand: "E-SHOP",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				rating : 3,
				images : [{src:'./img/main-product01.jpg', color: 'rgb(71, 89, 132)' },{src:'./img/main-product02.jpg', color: 'rgb(138, 36, 84)'},{src:'./img/main-product03.jpg', color: 'rgb(191, 105, 137)'},{src:'./img/main-product04.jpg', color: 'rgb(154, 84, 216)'}],
				size : ['S','XL','SL']
				
			}		 
	 },
	 '/prodotto/3' : {
			product : {
				colorSelected : 0,
				sizeSelected : 0,
				price: "$325.50",
				oldPrice: "$45.00",
				availability : "In Stock",
				brand: "E-SHOP",
				description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
				rating : 3,
				images : [{src:'./img/main-product01.jpg', color: 'rgb(71, 89, 132)' },{src:'./img/main-product02.jpg', color: 'rgb(138, 36, 84)'},{src:'./img/main-product03.jpg', color: 'rgb(191, 105, 137)'},{src:'./img/main-product04.jpg', color: 'rgb(154, 84, 216)'}],
				size : ['S','XL','SL']
				
			}		 
	 } 	 
  }
 

var store = {
  debug: true,
  state: {
    loading: false
  },
  setMessageAction (newValue) {
    this.state.loading = newValue
  }
} 

/* Ajax */ 
  function ajaxAction(type, url){
	  store.setMessageAction(true)
	  console.log(store.state.loading)
	  return new Promise(function(res){setTimeout(function(){store.setMessageAction(false); console.log(store.state.loading); res(urls[url])},3000)})
  }
  
  function ajaxCall(type, url){	  
	  return {	  
	  always : ajaxAction(type, url)
  }}
  

/* Services */   
  
  function getProduct(num){  
  return ajaxCall('POST','/prodotto/'+ num)
  }
  
  
var services = {
	getProductById : getProduct
}  
  

/* Module */  
var VueProvider = {};  
function install (Vue) { 
  Vue.prototype.providerService = services;
}
VueProvider.install = install;

