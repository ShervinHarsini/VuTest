var eventHub = new Vue();

Vue.component('loader', {
	template : `
		<div v-show="isLoading && !data" style="width: 100%;text-align: center;"><img width="200px" src="img/loading.gif"></div>
	`,
	props:['isLoading', 'data'],
})	

Vue.component('lateralfilter-component',{
	template : `
<div id="aside" class="col-md-3">
					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Shop by:</h3>
						<ul class="filter-list" v-show="!!filterFilter('Color').list.length">
							<li><span class="text-uppercase">{{filterFilter('Color').name}}:</span></li>
							<li @click="removeColor(item)" v-for="item in filterFilter('Color').list"><a :style="{'color':'#FFF', 'background-color':item.color}">{{item.name}}</a></li>
						</ul>

						<ul class="filter-list">
							<li><span class="text-uppercase">{{filterFilter('Size').name}}:</span></li>
							<li v-for="itemA in filterFilter('Size').list"><a href="#">{{itemA.name}}</a></li>
						</ul>

						<ul class="filter-list">
							<li><span class="text-uppercase">{{filterFilter('Price').name}}:</span></li>
							<li><a href="#">{{filterFilter('Price').list[0].name}}: {{filterFilter('Price').list[0].val}}</a></li>
							<li><a href="#">{{filterFilter('Price').list[1].name}}: {{filterFilter('Price').list[1].val}}</a></li>
						</ul>

						<ul class="filter-list">
							<li><span class="text-uppercase">{{filterFilter('Gender').name}}:</span></li>
							<li><a href="#">{{filterFilter('Gender').list[0].name}}</a></li>
						</ul>

						<button class="primary-btn">Clear All</button>
					</div>
					<!-- /aside widget -->

					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Filter by Price</h3>
						<div id="price-slider"></div>
					</div>
					<!-- aside widget -->

					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Filter By Color:</h3>
						<ul class="color-option">
							<li @click="function(e){addColor({color : '#475984', name : 'East Bay'}, e)}"><a style="background-color:#475984;"></a></li>
							<li @click="function(e){addColor({color : '#8A2454', name : 'Camelot'}, e)}"><a style="background-color:#8A2454;"></a></li>
							<li @click="function(e){addColor({color : '#BF6989', name : 'Tapestry'}, e)}"><a style="background-color:#BF6989;"></a></li>
							<li @click="function(e){addColor({color : '#9A54D8', name : 'Medium Purple'}, e)}"><a style="background-color:#9A54D8;"></a></li>
							<li @click="function(e){addColor({color : '#675F52', name : 'Gray'}, e)}"><a style="background-color:#675F52;"></a></li>
							<li @click="function(e){addColor({color : '#050505', name : 'Dark'}, e)}"><a style="background-color:#050505;"></a></li>
							<li @click="function(e){addColor({color : '#D5B47B', name : 'Bege'}, e)}"><a style="background-color:#D5B47B;"></a></li>
						</ul>
					</div>
					<!-- /aside widget -->

					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Filter By Size:</h3>
						<ul class="size-option">
							<li class="active"><a href="#">S</a></li>
							<li class="active"><a href="#">XL</a></li>
							<li><a href="#">SL</a></li>
						</ul>
					</div>
					<!-- /aside widget -->

					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Filter by Brand</h3>
						<ul class="list-links">
							<li><a href="#">Nike</a></li>
							<li><a href="#">Adidas</a></li>
							<li><a href="#">Polo</a></li>
							<li><a href="#">Lacost</a></li>
						</ul>
					</div>
					<!-- /aside widget -->

					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Filter by Gender</h3>
						<ul class="list-links">
							<li class="active"><a href="#">Men</a></li>
							<li><a href="#">Women</a></li>
						</ul>
					</div>
					<!-- /aside widget -->

					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Top Rated Product</h3>
						<!-- widget product -->
						<div class="product product-widget">
							<div class="product-thumb">
								<img src="./img/thumb-product01.jpg" alt="">
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
						<!-- /widget product -->

						<!-- widget product -->
						<div class="product product-widget">
							<div class="product-thumb">
								<img src="./img/thumb-product01.jpg" alt="">
							</div>
							<div class="product-body">
								<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
								<h3 class="product-price">$32.50</h3>
								<div class="product-rating">
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star"></i>
									<i class="fa fa-star-o empty"></i>
								</div>
							</div>
						</div>
						<!-- /widget product -->
					</div>
					<!-- /aside widget -->
				</div>	
	`,

	data: function(){
		return {
			filter : [  
			   {  
				  name:"Color",
				  list:[  
					 {  
						color:"#8A2454",
						name:"Camelot"
					 },
					 {  
						color:"#475984",
						name:"East Bay"
					 },
					 {  
						color:"#BF6989",
						name:"Tapestry"
					 },
					 {  
						color:"#9A54D8",
						name:"Medium Purple"
					 }
				  ]
			   },
			   {  
				  name:"Size",
				  list:[  
					 {  
						name:"X"
					 },
					 {  
						name:"XL"
					 }
				  ]
			   },
			   {  
				  name:"Price",
				  list:[  
					 {  
						val:"$20.00",
						name:"MIN"
					 },
					 {  
						val:"$120.00",
						name:"MAX"
					 }
				  ]
			   },
			   {  
				  name:"Gender",
				  list:[  
					 {  
						name:"Men"
					 }
				  ]
			   }
			]
		}
	},
	methods : {
		filterFilter : function(title) {
			return this.filter.filter(function(filt){return filt.name === title})[0]
		},
		addColor : function(colorCho, e){
			if(!$(e.target).parent().hasClass('active')){
			var color = this.filter.filter(function(filt){return filt.name === 'Color'})[0]
			color.list.push(colorCho);
			var a = this.filter.indexOf(color);
			this.filter[a] = color;
			$(e.target).parent().addClass('active')
		} else {
			$(e.target).parent().removeClass('active')
		}
		
		},
		removeColor : function(colorCho){
			var color = this.filter.filter(function(filt){return filt.name === 'Color'})[0]
			var colorChoosed = color.list.filter(function(fil){return fil.name === colorCho.name})[0]
			var a = color.list.indexOf(colorChoosed);
			color.list.splice(a, 1);
			var b = this.filter.indexOf(color);
			this.filter[b] = color;	
		},
		changePrice : function(){
			var slider = document.getElementById('price-slider');
			var color = this.filter.filter(function(filt){return filt.name === 'Price'})[0]
			var a = this.filter.indexOf(color);
			color.list[0].val = slider.noUiSlider.get()[0]
			color.list[1].val = slider.noUiSlider.get()[1]
			this.filter[a] = color;
		}
	},
	mounted : function(){
	  // PRICE SLIDER
	  var _this = this;
	  var slider = document.getElementById('price-slider');
	  if (slider) {
		noUiSlider.create(slider, {
		  start: [1, 999],
		  connect: true,
		  tooltips: [true, true],
		  format: {
			to: function(value) {
			  return value.toFixed(2) + '$';
			},
			from: function(value) {
			  return value
			}
		  },
		  range: {
			'min': 1,
			'max': 999
		  }
		});
	  }
	  slider.noUiSlider.on('update', _this.changePrice);

	}
})

Vue.component('storefilter-component',{
	template: `
				<div class="store-filter clearfix">
						<div class="pull-left">
							<div class="row-filter">
								<a v-on:click="viewChange(true)" :class="{active : view}"><i class="fa fa-th-large"></i></a>
								<a v-on:click="viewChange(false)" :class="{active : !view}"><i class="fa fa-bars"></i></a>
							</div>
							<div class="sort-filter">
								<span class="text-uppercase">Sort By:</span>
								<select class="input">
										<option value="0">Position</option>
										<option value="0">Price</option>
										<option value="0">Rating</option>
									</select>
								<a href="#" class="main-btn icon-btn"><i class="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div class="pull-right">
							<div class="page-filter">
								<span class="text-uppercase">Show:</span>
								<select class="input">
										<option value="0">10</option>
										<option value="1">20</option>
										<option value="2">30</option>
									</select>
							</div>
							<ul class="store-pages">
								<li><span class="text-uppercase">Page:</span></li>
								<li class="active">1</li>
								<li><a href="#">2</a></li>
								<li><a href="#">3</a></li>
								<li><a href="#"><i class="fa fa-caret-right"></i></a></li>
							</ul>
						</div>
					</div>	
	`,
	props: ['viewChange', 'view']
})

var products = {
template : '<div class="row">'+
'			'+
''+
'				<!-- MAIN -->'+
'				<div id="main" class="col-md-9">'+
'					<!-- store bottom filter -->'+
'					<storefilter-component :viewChange="viewChange" :view="view" ></storefilter-component>'+
'					<!-- /store bottom filter -->'+
'					<!-- STORE -->'+
'					<div id="store">'+
'						<!-- row -->'+
'						<div class="row">'+
'							<loader :is-loading="isLoading.val" :data="productList"></loader>'+
'							<!-- Product Single -->'+
'							<div v-for="prod in productList" class="col-md-4 col-sm-6 col-xs-6" v-if="view">'+
'								<div class="product product-single">'+
'									<div class="product-thumb">'+
'										<div class="product-label">'+
'											<span v-for="(label, i) in prod.productLabel" :class="{sale : i !== 0}">{{label.name}}</span>'+
'										</div>'+
'										<button v-on:click="showProduct" class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>'+
'										<img :src="prod.image" alt="">'+
'									</div>'+
'									<div class="product-body">'+
'										<h3 class="product-price">{{prod.price}} <del class="product-old-price">{{prod.oldPrice}}</del></h3>'+
'										<div class="product-rating">'+
'											<i v-for="rateItem in rate(prod.rating)" :class="{\'fa fa-star\': rateItem, \'fa fa-star-o empty\': !rateItem}"></i>'+
'										</div>'+
'										<h2 class="product-name"><a href="#">{{prod.productName}}</a></h2>'+
'										<div class="product-btns">'+
'											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>'+
'											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>'+
'											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>'+
'										</div>'+
'									</div>'+
'								</div>'+
'							</div>'+
'							<!-- /Product Single -->'+
'							<!-- Table View -->'+
'							<table class="shopping-cart-table table" v-if="!view" style="width:90%; margin: auto;">'+
'								<thead>'+
'									<tr>'+
'										<th>Product</th>'+
'										<th></th>'+
'										<th class="text-center">Price</th>'+
'									</tr>'+
'								</thead>'+
'								<tbody>'+
'									<tr v-for="prod in productList">'+
'										<td class="thumb"><img style="width:207px!important" :src="prod.image" alt=""></td>'+
'										<td class="details">'+
'											<a href="#">{{prod.productName}}</a>'+
'											<ul>'+
'												<li><span>Size: XL</span></li>'+
'												<li><span>Color: Camelot</span></li>'+
'											</ul>'+
'										</td>'+
'										<td class="price text-center"><strong>{{prod.price}}</strong><br><del class="font-weak"><small>{{prod.oldPrice}}</small></del></td>									</tr>'+
'								</tbody>								'+
'							</table>							'+
'							<!-- /Table View -->'+
'							'+
'							'+
'						</div>'+
'						<!-- /row -->'+
'					</div>'+
'					<!-- /STORE -->'+
''+
'					<!-- store bottom filter -->'+
'					<storefilter-component :viewChange="viewChange" :view="view" ></storefilter-component>'+
'					<!-- /store bottom filter -->'+
'				</div>'+
'				<!-- /MAIN -->'+
'				<!-- ASIDE -->'+
'				<lateralfilter-component></lateralfilter-component>'+
'				<!-- /ASIDE -->'+
'			</div>',
data : function (){return{
	view : true,
	productList : false
}},
props :['searchTerm','isLoading','reqData'],
methods: {
	callService : function(){
		var _this = this;
		_this.productList = false
		this.reqData("getProducts", {props : this.searchTerm}, function(store){_this.productList = store.product})
	},
	rate : function(rating){
		var rateObj = [];
		for(var i = 0; i < 5; i++){
			if(i < rating){
			rateObj.push(true)
			} else {
			rateObj.push(false)
			}
		}
		return rateObj
	},
	viewChange : function(val){
		this.view = val;
	},
	showProduct : function(){
		window.location = "#/product/2"
	}
},
mounted : function(){
  // PRICE SLIDER
  eventHub.$on('reload-products', this.callService)
  this.callService();
}

}