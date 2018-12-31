var eventHub = new Vue();

Vue.component('loader', {
	template : `
		<div v-show="isLoading && !data" style="width: 100%;text-align: center;"><img width="200px" src="img/loading.gif"></div>
	`,
	props:['isLoading', 'data'],
})	

Vue.component('noresults', {
	template : `
		<div v-show="data !== false && data.length === 0" style="width: 100%;text-align: center;"><img width="200px" src="img/not.jpg"></div>
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
							<li @click="addColor(item, $event)" action="delete" v-for="item in filterFilter('Color').list"><a :style="{'color':'#FFF', 'background-color':item.color}">{{item.name}}</a></li>
						</ul>

						<ul class="filter-list" v-show="!!filterFilter('Size').list.length">
							<li><span class="text-uppercase">{{filterFilter('Size').name}}:</span></li>
							<li @click="changeSize" action = "delete" v-for="itemA in filterFilter('Size').list"><a>{{itemA.name}}</a></li>
						</ul>

						<ul class="filter-list" v-show="filterFilter('Price').list[0].val !== 1 || filterFilter('Price').list[1].val !== 999">
							<li><span class="text-uppercase">{{filterFilter('Price').name}}:</span></li>
							<li v-if="itemA.val !== 1 && itemA.val !== 999" v-for="itemA in filterFilter('Price').list"><a >{{itemA.name}}: {{itemA.val}}</a></li>
						</ul>

						<ul class="filter-list" v-if="!!filterFilter('Gender').list.length">
							<li><span class="text-uppercase">{{filterFilter('Gender').name}}:</span></li>
							<li @click="changeGender" action = "delete" v-for="itemA in filterFilter('Gender').list"><a >{{itemA.name}}</a></li>
						</ul>

						<button v-if="showClear" @click="clearAll" class="primary-btn">Clear All</button>
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
							<li action="add" :class="{'active' : addColor('East Bay')}" @click="function(e){addColor({color : '#475984', name : 'East Bay'}, e)}"><a style="background-color:#475984;"></a></li>
							<li action="add" :class="{'active' : addColor('Camelot')}" @click="function(e){addColor({color : '#8A2454', name : 'Camelot'}, e)}"><a style="background-color:#8A2454;"></a></li>
							<li action="add" :class="{'active' : addColor('Tapestry')}" @click="function(e){addColor({color : '#BF6989', name : 'Tapestry'}, e)}"><a style="background-color:#BF6989;"></a></li>
							<li action="add" :class="{'active' : addColor('Medium Purple')}" @click="function(e){addColor({color : '#9A54D8', name : 'Medium Purple'}, e)}"><a style="background-color:#9A54D8;"></a></li>
							<li action="add" :class="{'active' : addColor('Gray')}" @click="function(e){addColor({color : '#675F52', name : 'Gray'}, e)}"><a style="background-color:#675F52;"></a></li>
							<li action="add" :class="{'active' : addColor('Dark')}" @click="function(e){addColor({color : '#050505', name : 'Dark'}, e)}"><a style="background-color:#050505;"></a></li>
							<li action="add" :class="{'active' : addColor('Bege')}" @click="function(e){addColor({color : '#D5B47B', name : 'Bege'}, e)}"><a style="background-color:#D5B47B;"></a></li>
						</ul>
					</div>
					<!-- /aside widget -->

					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Filter By Size:</h3>
						<ul class="size-option">
							<li @click="changeSize" action="add" cls="active" :class="{'active' : changeSize('S')}"><a >S</a></li>
							<li @click="changeSize" action="add" cls="active" :class="{'active' : changeSize('XL')}"><a >XL</a></li>
							<li @click="changeSize" action="add" cls="active" :class="{'active' : changeSize('SL')}"><a >SL</a></li>
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
							<li @click="changeGender" action="add" :class="{'active' : changeGender('Men')}"><a >Men</a></li>
							<li @click="changeGender" action="add" :class="{'active' : changeGender('Women')}"><a >Women</a></li>
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
						val: 1,
						name:"MIN"
					 },
					 {  
						val: 999,
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
		clearAll : function(val){
			var slider = document.getElementById('price-slider');
			slider.noUiSlider.set([1, 999]);
			this.empty(this.filter[0].list)
			this.empty(this.filter[1].list)
			this.filter[2].list[0].val = 1;
			this.filter[2].list[1].val = 999;
			this.empty(this.filter[3].list)
			var _this = this;
			this.$nextTick(function(){_this.startSearch()})
		},
		empty : function(arr){
			 arr.splice(0,arr.length);
		},
		changePrice : function(){
			var slider = document.getElementById('price-slider');
			var color = this.filter.filter(function(filt){return filt.name === 'Price'})[0]
			var a = this.filter.indexOf(color);
			color.list[0].val = parseFloat(slider.noUiSlider.get()[0].replace(/\$/g,""))
			color.list[1].val = parseFloat(slider.noUiSlider.get()[1].replace(/\$/g,""))
			this.filter[a] = color;
			var _this = this;
			this.$nextTick(function(){_this.startSearch()})
		},
		addColor : function (colorCho, e){
			var a = this.filter.indexOf(this.filter.filter(function(filt){return filt.name === 'Color'})[0])
			if(e !== undefined && e.type === "click"){
			switch(e.currentTarget.attributes.action.value){
				case "delete":
					var b = this.filter[a].list.indexOf(this.filter[a].list.filter(function(ter){return ter.name === colorCho.name})[0]);
					this.filter[a].list.splice(b, 1);
					this.startSearch();
					break;
				case "add":
					var search = this.filter[a].list.filter(function(ter){return ter.name === colorCho.name});
					if(search.length === 0){
						this.filter[a].list.push(colorCho)
						this.startSearch();
					}
				default:
					break;
			}
			} else {
				var search = this.filter[a].list.filter(function(ter){return ter.name === colorCho});
				if(search.length !== 0){
					return true
				} else {
					return false
				}

			}
			return false			
			
		},
		changeSize : function (e){
			var a = this.filter.indexOf(this.filter.filter(function(filt){return filt.name === 'Size'})[0])
			if(e !== undefined && e.type === "click"){
			switch(e.currentTarget.attributes.action.value){
				case "delete":
					var b = this.filter[a].list.indexOf(this.filter[a].list.filter(function(ter){return ter.name === e.currentTarget.firstChild.text})[0]);
					this.filter[a].list.splice(b, 1);
					this.startSearch();
					break;
				case "add":
					var search = this.filter[a].list.filter(function(ter){return ter.name === e.currentTarget.firstChild.text});
					if(search.length === 0){
						this.filter[a].list.push({name : e.currentTarget.firstChild.text})
						this.startSearch();
					}
					break;
				default:
					break;
			}
			} else {
				var search = this.filter[a].list.filter(function(ter){return ter.name === e});
				if(search.length !== 0){
					return true
				} else {
					return false
				}

			}
			return false
			
		},
	changeGender : function (e){
			var a = this.filter.indexOf(this.filter.filter(function(filt){return filt.name === 'Gender'})[0])
			if(e !== undefined && e.type === "click"){
			switch(e.currentTarget.attributes.action.value){
				case "delete":
					var b = this.filter[a].list.indexOf(this.filter[a].list.filter(function(ter){return ter.name === e.currentTarget.firstChild.text})[0]);
					this.filter[a].list.splice(b, 1);
					this.startSearch();
					break;
				case "add":
					var search = this.filter[a].list.filter(function(ter){return ter.name === e.currentTarget.firstChild.text});
					if(search.length === 0){
						this.filter[a].list = []
						this.filter[a].list.push({name : e.currentTarget.firstChild.text})
						this.startSearch();
					}
					this.startSearch();
					break;
				default:
					break;
			}
			} else {
				var search = this.filter[a].list.filter(function(ter){return ter.name === e});
				if(search.length !== 0){
					return true
				} else {
					return false
				}

			}
			return false
			
		},
		emitToProds : function (val) {
			this.$emit('filter-load', val)
		},
		startSearch : function(){
			this.emitToProds(this.filter)
		}
  },
  computed : {
	showClear : function () {
		if (this.filter[0].list.length === 0 && 
			this.filter[1].list.length === 0 && 
			this.filter[3].list.length === 0 &&
			this.filterFilter('Price').list[0].val === 1 && this.filterFilter('Price').list[1].val === 999){
				return false
			} else {
				return true
			}
	}  
  },
	mounted : function(){
	  // PRICE SLIDER
	  var _this = this;
	  this.emitToProds(this.filter)
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
	  slider.noUiSlider.on('change', _this.changePrice);

	}
})

function pagination(c, m) {

    var current = c,

        last = m,

        delta = 2,

        left = current - delta,

        right = current + delta + 1,

        range = [],

        rangeWithDots = [],

        l;



    for (let i = 1; i <= last; i++) {

        if (i == 1 || i == last || i >= left && i < right) {

            range.push(i);

        }

    }



    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }



    return rangeWithDots;

}

Vue.component('storefilter-component',{
	template: `
				<div class="store-filter clearfix">
						<div class="pull-left">
							<div class="row-filter">
								<a v-on:click="viewChange(true)" :class="{'active' : view}"><i class="fa fa-th-large"></i></a>
								<a v-on:click="viewChange(false)" :class="{'active' : !view}"><i class="fa fa-bars"></i></a>
							</div>
							<div class="sort-filter">
								<span class="text-uppercase">Sort By:</span>
								<select v-on:change="onChange($event,'sort')" :value="page.sort" class="input">
										<option value="price">Price</option>
										<option value="rating">Rating</option>
									</select>
								<a v-if="page.up" @click="onChange(false, 'upDown')" class="main-btn icon-btn"><i class="fa fa-arrow-up"></i></a>
								<a v-if="!page.up" @click="onChange(true, 'upDown')" class="main-btn icon-btn"><i class="fa fa-arrow-down"></i></a>
							</div>
						</div>
						<div class="pull-right">
							<div class="page-filter">
								<span class="text-uppercase">Show:</span>
								<select v-on:change="onChange($event,'max')" class="input" :value="page.results">
										<option value="10" selected>10</option>
										<option value="20">20</option>
										<option value="30">30</option>
									</select>
							</div>
							<ul class="store-pages">
								<li ><span class="text-uppercase">Page:</span></li>
								<li @click="choose('-')" v-if="showLeftArrow"><a href="#" ><i class="fa fa-caret-left"></i></a></li>
								<li @click="choose(pag)" v-for="(pag,i) in calcPages()" :class="{'active' : activeSelected(pag)}">{{pag}}</li>
								<li @click="choose('+')" v-if="showArrowRight"><a href="#" ><i class="fa fa-caret-right"></i></a></li>
							</ul>
						</div>
					</div>	
	`,
	props: ['viewChange', 'view', 'page'],
	methods : {
		calcPages : function(val){
			return pagination(this.page.actualPage, this.page.pages)
		},
		choose : function(pag){
			this.$emit('choose-page', pag)
		},
		activeSelected : function (val){
			return this.page.actualPage === val
		},
		onChange : function(e, type){
			switch (type){
				case "max":
					this.$emit('choose-results', e.target.value)
					break;
				case "upDown":
					this.$emit('choose-up', e)
					break;
				case "sort":
					this.$emit('choose-sort', e.target.value)
					break;					
				default:
					break;
			}
		}
	},
	  computed: {
		showLeftArrow: function () {
		var bool = this.page.actualPage > 1;
		  return bool
		},
		showArrowRight : function(){
			return this.page.actualPage < this.page.pages
		}
  }
})

var products = {
template : '<div class="row">'+
'			'+
''+
'				<!-- MAIN -->'+
'				<div id="main" class="col-md-9"style="padding-top: 30px">'+
'					<!-- store bottom filter -->'+
'					<storefilter-component :viewChange="viewChange" :view="view" :page="page" v-on:choose-page="choose" v-on:choose-results = "chooseResults" v-on:choose-up = "chooseUp" v-on:choose-sort = "chooseSort"></storefilter-component>'+
'					<!-- /store bottom filter -->'+
'					<!-- STORE -->'+
'					<div id="store">'+
'						<!-- row -->'+
'						<div class="row">'+
'							<transition name="fade">'+
'							<loader :is-loading="isLoading.val" :data="productList"></loader>'+
'							</transition>'+
'							<transition name="fade">'+
'							<noresults :is-loading="isLoading.val" :data="productList"></noresults>'+
'							</transition>'+
'							<!-- Product Single -->'+
'							<transition-group name="fade">'+
'							<div :key="i" v-for="(prod, i) in productList" class="col-md-4 col-sm-6 col-xs-6" v-if="view">'+
'								<div class="product product-single">'+
'									<div class="product-thumb">'+
'										<div class="product-label">'+
'											<span v-for="(label, i) in prod.productLabel" :class="{sale : i !== 0}">{{label.name}}</span>'+
'										</div>'+
'										<button v-on:click="showProduct(prod.id)" class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>'+
'										<img :src="prod.image" alt="">'+
'									</div>'+
'									<div class="product-body">'+
'										<h3 class="product-price">{{prod.price}} <del class="product-old-price">{{prod.oldPrice}}</del></h3>'+
'										<div class="product-rating">'+
'											<i v-for="rateItem in rate(prod.rating)" :class="{\'fa fa-star\': rateItem, \'fa fa-star-o empty\': !rateItem}"></i>'+
'										</div>'+
'										<h2 class="product-name"><a href="#" v-html="prod.productName"></a></h2>'+
'										<div class="product-btns">'+
'											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>'+
'											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>'+
'											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>'+
'										</div>'+
'									</div>'+
'								</div>'+
'							</div>'+
'							</transition-group>'+
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
'					<storefilter-component :viewChange="viewChange" :view="view" :page="page" v-on:choose-page="choose" v-on:choose-results = "chooseResults" v-on:choose-up = "chooseUp" v-on:choose-sort = "chooseSort"></storefilter-component>'+
'					<!-- /store bottom filter -->'+
'				</div>'+
'				<!-- /MAIN -->'+
'				<!-- ASIDE -->'+
'				<lateralfilter-component v-on:filter-load="filter" ></lateralfilter-component>'+
'				<!-- /ASIDE -->'+
'			</div>',
data : function (){return{
	view : true,
	productList : false,
	filterArray : false,
	page : {
		pages : 40,
		actualPage : 1,
		results : 10,
		up : true,
		sort : "price"
	}
}},
props :['searchTerm','isLoading','reqData'],
methods: {
	callService : function(val){
		var _this = this;
		var data = {search : val, filter : this.filterArray, actualPage : this.page.actualPage, results : this.page.results, up : this.page.up, sort : this.page.sort}
		_this.productList = false
		this.reqData("getProducts", btoa(unescape(encodeURIComponent(JSON.stringify(data)))), function(storeData){_this.productList = storeData.products; _this.page.pages = storeData.pageNumber})
	},
	choose : function(pag){
		if(typeof(pag) !== "string"){
		this.page.actualPage = pag
		this.callService(this.searchTerm)
		} else {
			switch (pag){
				case "...":
					break;
				case "-":
					this.page.actualPage -= 1
					this.callService(this.searchTerm)
					break;
				case "+":
					this.page.actualPage += 1
					this.callService(this.searchTerm)
					break;
				default:
					break;
			}
		}
	},
	chooseResults : function(val){
		this.page.results = val
		this.callService(this.searchTerm)
	},
	chooseUp : function(val) {
		this.page.up = val
		this.callService(this.searchTerm)
	},
	chooseSort : function(val) {
		this.page.sort = val
		this.callService(this.searchTerm)
		
	},	
	filter : function(val){
		this.filterArray = val
		this.callService(this.searchTerm)
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
	showProduct : function(id){
		window.location = "#/product/" + id
	}
},
mounted : function(){
  // PRICE SLIDER
  eventHub.$on('reload-products', this.callService)
}

}