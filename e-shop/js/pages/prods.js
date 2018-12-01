Vue.component('lateralfilter-component',{
	template : `
<div id="aside" class="col-md-3">
					<!-- aside widget -->
					<div class="aside">
						<h3 class="aside-title">Shop by:</h3>
						<ul class="filter-list">
							<li><span class="text-uppercase">color:</span></li>
							<li><a href="#" style="color:#FFF; background-color:#8A2454;">Camelot</a></li>
							<li><a href="#" style="color:#FFF; background-color:#475984;">East Bay</a></li>
							<li><a href="#" style="color:#FFF; background-color:#BF6989;">Tapestry</a></li>
							<li><a href="#" style="color:#FFF; background-color:#9A54D8;">Medium Purple</a></li>
						</ul>

						<ul class="filter-list">
							<li><span class="text-uppercase">Size:</span></li>
							<li><a href="#">X</a></li>
							<li><a href="#">XL</a></li>
						</ul>

						<ul class="filter-list">
							<li><span class="text-uppercase">Price:</span></li>
							<li><a href="#">MIN: $20.00</a></li>
							<li><a href="#">MAX: $120.00</a></li>
						</ul>

						<ul class="filter-list">
							<li><span class="text-uppercase">Gender:</span></li>
							<li><a href="#">Men</a></li>
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
							<li><a href="#" style="background-color:#475984;"></a></li>
							<li><a href="#" style="background-color:#8A2454;"></a></li>
							<li class="active"><a href="#" style="background-color:#BF6989;"></a></li>
							<li><a href="#" style="background-color:#9A54D8;"></a></li>
							<li><a href="#" style="background-color:#675F52;"></a></li>
							<li><a href="#" style="background-color:#050505;"></a></li>
							<li><a href="#" style="background-color:#D5B47B;"></a></li>
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
	`
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
template : `
			<div class="row">
				<!-- ASIDE -->
				<lateralfilter-component></lateralfilter-component>
				<!-- /ASIDE -->

				<!-- MAIN -->
				<div id="main" class="col-md-9">
					<!-- store top filter -->
					<storefilter-component :viewChange="viewChange" :view="view" ></storefilter-component>
					<!-- /store top filter -->

					<!-- STORE -->
					<div id="store">
						<!-- row -->
						<div class="row">
							<!-- Product Single -->
							<div v-for="prod in productList" class="col-md-4 col-sm-6 col-xs-6" v-if="view">
								<div class="product product-single">
									<div class="product-thumb">
										<div class="product-label">
											<span v-for="(label, i) in prod.productLabel" :class="{sale : i !== 0}">{{label.name}}</span>
										</div>
										<button v-on:click="showProduct" class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
										<img :src="prod.image" alt="">
									</div>
									<div class="product-body">
										<h3 class="product-price">{{prod.price}} <del class="product-old-price">{{prod.oldPrice}}</del></h3>
										<div class="product-rating">
											<i v-for="rateItem in rate(prod.rating)" :class="{'fa fa-star': rateItem, 'fa fa-star-o empty': !rateItem}"></i>
										</div>
										<h2 class="product-name"><a href="#">{{prod.productName}}</a></h2>
										<div class="product-btns">
											<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
											<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
											<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
										</div>
									</div>
								</div>
							</div>
							<!-- /Product Single -->
							<!-- Table View -->
							<table class="shopping-cart-table table" v-if="!view" style="width:90%; margin: auto;">
								<thead>
									<tr>
										<th>Product</th>
										<th></th>
										<th class="text-center">Price</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="prod in productList">
										<td class="thumb"><img style="width:207px!important" :src="prod.image" alt=""></td>
										<td class="details">
											<a href="#">{{prod.productName}}</a>
											<ul>
												<li><span>Size: XL</span></li>
												<li><span>Color: Camelot</span></li>
											</ul>
										</td>
										<td class="price text-center"><strong>{{prod.price}}</strong><br><del class="font-weak"><small>{{prod.oldPrice}}</small></del></td>									</tr>
								</tbody>								
							</table>							
							<!-- /Table View -->
							
							
						</div>
						<!-- /row -->
					</div>
					<!-- /STORE -->

					<!-- store bottom filter -->
					<storefilter-component :viewChange="viewChange" :view="view" ></storefilter-component>
					<!-- /store bottom filter -->
				</div>
				<!-- /MAIN -->
			</div>
`,
data : function (){return{
	view : true,
	productList : [
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
	]
}},
methods: {
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
}

}