var product = {
template : `
<div>
	<div class="section prod">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<!--  Product Details -->
				<loader :is-loading="isLoading.val" :data="product"></loader>
				<transition name="fade">
				
				
				<div v-show="!!product" class="product product-details clearfix">
					<div class="col-md-6 ismobile">
						<div class="product-body">
							<div class="product-label">
								<span>New</span>
								<span class="sale">-20%</span>
							</div>
							<h2 class="product-name editable" v-html="product.title"></h2>
							<h3 class="product-price">{{product.price}} <del class="product-old-price">{{product.oldPrice}}</del></h3>
							<div>
								<div class="product-rating">
									<i v-for="rateItem in rate(product.rating)" :class="{'fa fa-star': rateItem, 'fa fa-star-o empty': !rateItem}"></i>
								</div>
								<a href="#">3 Review(s) / Add Review</a>
							</div>
							<p><strong>Availability:</strong> {{product.availability}}</p>
							<p><strong>Brand:</strong> {{product.availability}}</p>
					</div>
					</div>
					<div class="col-md-6">
						<div id="product-main-view" class="product-main-view">
							<div v-for="image in product.images" class="product-view">
								<img :src="image.src" alt="">
							</div>
						</div>
						<div id="product-view" class="product-view">
							<div v-for="image in product.images" class="product-view">
								<img :src="image.src" alt="">
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="product-body">
						<div class="ismobileProd">
							<div class="product-label">
								<span>New</span>
								<span class="sale">-20%</span>
							</div>
							<h2 class="product-name editable" v-html="product.title"></h2>
							<h3 class="product-price">{{product.price}} <del class="product-old-price">{{product.oldPrice}}</del></h3>
							<div>
								<div class="product-rating">
									<i v-for="rateItem in rate(product.rating)" :class="{'fa fa-star': rateItem, 'fa fa-star-o empty': !rateItem}"></i>
								</div>
								<a href="#">3 Review(s) / Add Review</a>
							</div>
							<p><strong>Availability:</strong> {{product.availability}}</p>
							<p><strong>Brand:</strong> {{product.availability}}</p>
						</div>
							<p class="editable">{{product.description}}</p>
							<div class="product-options">
								<ul class="size-option">
									<li><span class="text-uppercase">Size:</span></li>
									<li v-on:click="selSize(i)" v-for="(size, i) in product.size" :class="{'active' : product.sizeSelected === i}"><a >{{size}}</a></li>
								</ul>
								<ul class="color-option">
									<li><span class="text-uppercase">Color:</span></li>
									<li :class="{'active' : product.colorSelected == i}" v-on:click="slickGo(i)" v-for="(image, i) in product.images" ><a v-bind:style='{"background-color" : image.color}'></a></li>
								</ul>
							</div>

							<div class="product-btns">
								<div class="qty-input">
									<span class="text-uppercase">QTY: </span>
									<input class="input" type="number">
								</div>
								<button v-show="!user" class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
								<button v-show="!!user" @click="callSaveService()" class="primary-btn">Submit</button>
								<div class="pull-right">
									<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
									<button class="main-btn icon-btn"><i class="fa fa-share-alt"></i></button>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-12">
						<div class="product-tab">
							<ul class="tab-nav">
								<li class="active"><a data-toggle="tab" href="#tab1">Description</a></li>
								<li><a data-toggle="tab" href="#tab1">Details</a></li>
								<li><a data-toggle="tab" href="#tab2">Reviews (3)</a></li>
							</ul>
							<div class="tab-content">
								<div id="tab1" class="tab-pane fade in active">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
										irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
								</div>
								<div id="tab2" class="tab-pane fade in">

									<div class="row">
										<div class="col-md-6">
											<div class="product-reviews">
												<div class="single-review">
													<div class="review-heading">
														<div><a href="#"><i class="fa fa-user-o"></i> John</a></div>
														<div><a href="#"><i class="fa fa-clock-o"></i> 27 DEC 2017 / 8:0 PM</a></div>
														<div class="review-rating pull-right">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o empty"></i>
														</div>
													</div>
													<div class="review-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
															irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>

												<div class="single-review">
													<div class="review-heading">
														<div><a href="#"><i class="fa fa-user-o"></i> John</a></div>
														<div><a href="#"><i class="fa fa-clock-o"></i> 27 DEC 2017 / 8:0 PM</a></div>
														<div class="review-rating pull-right">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o empty"></i>
														</div>
													</div>
													<div class="review-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
															irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>

												<div class="single-review">
													<div class="review-heading">
														<div><a href="#"><i class="fa fa-user-o"></i> John</a></div>
														<div><a href="#"><i class="fa fa-clock-o"></i> 27 DEC 2017 / 8:0 PM</a></div>
														<div class="review-rating pull-right">
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star"></i>
															<i class="fa fa-star-o empty"></i>
														</div>
													</div>
													<div class="review-body">
														<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute
															irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
													</div>
												</div>

												<ul class="reviews-pages">
													<li class="active">1</li>
													<li><a href="#">2</a></li>
													<li><a href="#">3</a></li>
													<li><a href="#"><i class="fa fa-caret-right"></i></a></li>
												</ul>
											</div>
										</div>
										<div class="col-md-6">
											<h4 class="text-uppercase">Write Your Review</h4>
											<p>Your email address will not be published.</p>
											<form class="review-form">
												<div class="form-group">
													<input class="input" type="text" placeholder="Your Name" />
												</div>
												<div class="form-group">
													<input class="input" type="email" placeholder="Email Address" />
												</div>
												<div class="form-group">
													<textarea class="input" placeholder="Your review"></textarea>
												</div>
												<div class="form-group">
													<div class="input-rating">
														<strong class="text-uppercase">Your Rating: </strong>
														<div class="stars">
															<input type="radio" id="star5" name="rating" value="5" /><label for="star5"></label>
															<input type="radio" id="star4" name="rating" value="4" /><label for="star4"></label>
															<input type="radio" id="star3" name="rating" value="3" /><label for="star3"></label>
															<input type="radio" id="star2" name="rating" value="2" /><label for="star2"></label>
															<input type="radio" id="star1" name="rating" value="1" /><label for="star1"></label>
														</div>
													</div>
												</div>
												<button class="primary-btn">Submit</button>
											</form>
										</div>
									</div>



								</div>
							</div>
						</div>
					</div>

				</div>
				</transition>
				<!-- /Product Details -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /section -->

	<!-- section -->
	<div class="section">
		<!-- container -->
		<div class="container">
			<!-- row 
			<pickedforyou-component></pickedforyou-component>
			/row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /section -->
</div>

`,
data: function(){return{
	product : false,
	editor : false
}},
props:['isLoading','reqData', 'user'],
methods:{
	slickGo : function(index) {
		  $('#product-main-view').slick('slickGoTo', index, true);
		  this.product.colorSelected = index;
	},
	selSize : function(index) {
		  this.product.sizeSelected = index;
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
	callService : function(){
		var _this = this;
		_this.product = false
		this.reqData("getProduct", btoa(this.$route.params['id']), function(store){_this.slickActivate(); _this.product = store})
	},
	callSaveService : function(){
		var _this = this;
		var data =  _this.product;
		this.editor.saveSelection();
		data.title = this.editor.getContent(1);
		data.productName = this.editor.getContent(1);
		this.reqData("save", btoa(JSON.stringify(data)), function(store){_this.product = store})
	},	
	slickActivate : function (){
  setTimeout(function(){
  $('#product-main-view .product-view').zoom();
  $('#product-main-view').slick({
    infinite: false,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-view',
  });

  $('#product-view').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
	infinite: false,
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#product-main-view',
  });
  },0)
	}
	
},
mounted: function(){
	// PRODUCT DETAILS SLICK
   this.callService()
   
 	   if(!!this.user){
	   var elements = document.querySelectorAll('.editable')
		this.editor = new MediumEditor(elements, {
		placeholder: {
			text: '',
			hideOnClick: true
		}
		
	   })};
   
},
watch: { user: function (value, oldValue) {
	if(value !== oldValue){
		
	   if(!value){
	   this.editor.destroy()
	}
} },
}
}