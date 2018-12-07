Vue.component('homepageSlider-component', {
	template : `
	<div id="home">
		<!-- container -->
		<div class="container">
			<!-- home wrap -->
			<div class="home-wrap">
				<!-- home slick -->
				<div id="home-slick" class="home-slick">
					<!-- banner -->
					<div class="banner banner-1">
						<img src="./img/banner01.jpg" alt="">
						<div class="banner-caption text-center">
							<h1>Bags sale</h1>
							<h3 class="white-color font-weak">Up to 50% Discount</h3>
							<button class="primary-btn">Shop Now</button>
						</div>
					</div>
					<!-- /banner -->

					<!-- banner -->
					<div class="banner banner-1">
						<img src="./img/banner02.jpg" alt="">
						<div class="banner-caption">
							<h1 class="primary-color">HOT DEAL<br><span class="white-color font-weak">Up to 50% OFF</span></h1>
							<button class="primary-btn">Shop Now</button>
						</div>
					</div>
					<!-- /banner -->

					<!-- banner -->
					<div class="banner banner-1">
						<img src="./img/banner03.jpg" alt="">
						<div class="banner-caption">
							<h1 class="white-color">New Product <span>Collection</span></h1>
							<button class="primary-btn">Shop Now</button>
						</div>
					</div>
					<!-- /banner -->
				</div>
				<!-- /home slick -->
			</div>
			<!-- /home wrap -->
		</div>
		<!-- /container -->
	</div>	
	`,
	mounted: function(){
  // HOME SLICK
  $('#home-slick').slick({
    autoplay: true,
    infinite: true,
    speed: 300,
    arrows: true,
  });		
	}
})


Vue.component('banners-component', {
	template: 	`<!-- section -->
	<div class="section">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<!-- banner -->
				<div class="col-md-4 col-sm-6">
					<a class="banner banner-1" href="#">
						<img src="./img/banner10.jpg" alt="">
						<div class="banner-caption text-center">
							<h2 class="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				<!-- /banner -->

				<!-- banner -->
				<div class="col-md-4 col-sm-6">
					<a class="banner banner-1" href="#">
						<img src="./img/banner11.jpg" alt="">
						<div class="banner-caption text-center">
							<h2 class="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				<!-- /banner -->

				<!-- banner -->
				<div class="col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3">
					<a class="banner banner-1" href="#">
						<img src="./img/banner12.jpg" alt="">
						<div class="banner-caption text-center">
							<h2 class="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				<!-- /banner -->

			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	<!-- /section -->`,
	templatel: `
	<div class="section">
		<!-- container -->
		<div class="container">
		
	<div class="row">	
	<div class="grid-stack">

		<div class="grid-stack-item" style="background-color : #fff;" data-gs-x="0" data-gs-y="0" data-gs-width="3" data-gs-height="3">		
		<!-- banner -->
			<a class="banner banner-1" href="#">
				<img src="./img/banner10.jpg" alt="">
				<div class="banner-caption text-center">
					<h2 class="white-color">NEW COLLECTION</h2>
				</div>
			</a>			
		</div>
		<!-- /banner -->

		<div class="grid-stack-item" style="background-color : #fff;" data-gs-x="3" data-gs-y="0" data-gs-width="3" data-gs-height="3">		
		<!-- banner -->
			<a class="banner banner-1" href="#">
				<img src="./img/banner11.jpg" alt="">
				<div class="banner-caption text-center">
					<h2 class="white-color">NEW COLLECTION</h2>
				</div>
			</a>			
		</div>
		<!-- /banner -->	

		<div class="grid-stack-item" style="background-color : #fff;" data-gs-x="6" data-gs-y="0" data-gs-width="3" data-gs-height="3">		
		<!-- banner -->
			<a class="banner banner-1" href="#">
				<img src="./img/banner12.jpg" alt="">
				<div class="banner-caption text-center">
					<h2 class="white-color">NEW COLLECTION</h2>
				</div>
			</a>			
		</div>
		<!-- /banner -->			
 
		<div class="grid-stack-item" style="background-color : #fff;" data-gs-x="12" data-gs-y="0" data-gs-width="3" data-gs-height="3">		
		<!-- banner -->
			<a class="banner banner-1" href="#">
				<img src="./img/banner12.jpg" alt="">
				<div class="banner-caption text-center">
					<h2 class="white-color">NEW COLLECTION</h2>
				</div>
			</a>			
		</div>
		<!-- /banner -->
 
	</div>
	
	
    </div>
	   <!-- /row -->
	

		</div>
		<!-- /container -->
	</div>	
	`,
	mounted(){
		setTimeout(function(){
			
			
/* 		$('.grid-stack').gridstack({
				staticGrid : false,
                width: 12,
				animate : true,
				disableDrag : false,
				disableResize  : false,
				draggable : false,
                alwaysShowResizeHandle: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                resizable: {
                    handles: 'e, se, s, sw, w, ne, nw'
                },
				
            });*/
		},0)
	}
})

Vue.component('dealsofthedayone-component',{
	template : `<div class="row">
				<!-- section-title -->
				<div class="col-md-12">
					<div :class="{'section-title' : !!title}">
						<h2 class="title" v-if="!!title">{{title}}</h2>
						<div class="pull-right">
							<div :class="'product-slick-dots-'+nameId()+' custom-dots'"></div>
						</div>
					</div>
				</div>
				<!-- /section-title -->

				<!-- banner -->
				<div class="col-md-3 col-sm-6 col-xs-6" v-if="num < 4">
				<div :id="'banner-slick-'+nameId()" style="margin: 0px!important;">
			
				<!-- Product Single -->				
					<div class="product product-single">
					<div class="product-hot">
						<div class="product-thumb ">
							<div class="product-label">
								<span >New</span>
								<span class="sale">-20%</span>
							</div>
							<ul class="product-countdown">
								<li><span>00 H</span></li>
								<li><span>00 M</span></li>
								<li><span>00 S</span></li>
							</ul>
							<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
							<img src="./img/product01.jpg" alt="">
						</div>
						<div class="product-body">
							<h3 class="product-price">$32.50 <del class="product-old-price">$45.00</del></h3>
							<div class="product-rating">
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star-o empty"></i>
							</div>
							<h2 class="product-name"><a href="#">Product Name Goes Here</a></h2>
							<div class="product-btns">
								<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
								<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
								<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
							</div>
						</div>
					</div>
					</div>
					
				<!-- /Product Single -->
					<!-- banner -->
					<div class="product product-single">
					<div class="banner banner-2">
						<img src="./img/banner14.jpg" alt="">
						<div class="banner-caption">
							<h2 class="white-color">NEW<br>COLLECTION</h2>
							<button class="primary-btn">Shop Now</button>
						</div>
					</div>
					</div>
				</div>
				<div :class="'banner-slick-dots-'+nameId()+' custom-dots'"></div>
				</div>
				<!-- /banner -->

				<!-- Product Slick -->
				<div :class="'col-md-'+classSel()+' col-sm-6 col-xs-6'">
					<div class="row">
						<div :id="'product-slick-'+nameId()" class="product-slick">
							<!-- Product Single -->
							<div v-for="prod in products" class="product product-single" v-bind:class="prod.code">
								<div class="product-thumb">
									<div class="product-label">
										<span v-if="prod.new">New</span>
										<span class="sale">{{prod.discount}}</span>
									</div>
									<ul class="product-countdown">
									</ul>
									<button class="main-btn quick-view"><i class="fa fa-search-plus"></i> Quick view</button>
									<img :src="prod.image" alt="">
								</div>
								<div class="product-body">
									<h3 class="product-price">{{prod.price.filter(function(val){ return val.currency === 'USD'})[0].valuecur}} <del class="product-old-price">$45.00</del></h3>
									<div class="product-rating">
										<i v-for="(rate, i) in 5" class="fa" v-bind:class="{'fa-star': i < prod.rate, 'fa-star-o empty' : i > prod.rate}"></i>
									</div>
									<h2 class="product-name"><a href="#">{{prod.name}}</a></h2>
									<div class="product-btns">
										<button class="main-btn icon-btn"><i class="fa fa-heart"></i></button>
										<button class="main-btn icon-btn"><i class="fa fa-exchange"></i></button>
										<button class="primary-btn add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
									</div>
								</div>
							</div>
							<!-- /Product Single -->
						</div>
					</div>
				</div>
				<!-- /Product Slick -->
			</div>`,
	props : ['title', 'id', 'num'],
	data : function(){return {
		products : [
				{
				new : true,
				discount : "-20%",
				countdown : "Dec 5, 2018 15:37:25" ,
				image : "./img/product01.jpg",
				price : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				oldprice : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				rate : "2",
				name : "Product Name",
				code : "232rrefs"
				},
				{
				new : true,
				discount : "-20%",
				countdown : "Dec 1, 2018 20:17:59",
				image : "./img/product02.jpg",
				price : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				oldprice : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				rate : "5",
				name : "Product Name",
				code : "54yhrhrr45"
				},
				{
				new : true,
				discount : "-20%",
				countdown : "Jan 5, 2019 15:37:25",
				image : "./img/product03.jpg",
				price : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				oldprice : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				rate : "5",
				name : "Product Name",
				code : "tryr545"
				},
				{
				new : true,
				discount : "-20%",
				countdown : "Jan 5, 2019 15:37:25",
				image : "./img/product04.jpg",
				price : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				oldprice : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				rate : "5",
				name : "Product Name",
				code : "hfhfjjf"
				},
				{
				new : true,
				discount : "-20%",
				countdown : "Jan 5, 2019 15:37:25",
				image : "./img/product04.jpg",
				price : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				oldprice : [{currency : "USD", valuecur : "$32.50"}, {currency : "EUR", "value" : "€32.50"}],
				rate : "1",
				name : "Product Name",
				code : "sadaad"
				},
			]
	}},
	methods: {
		classSel : function(){if(this.num < 4) {return 9} else {return 12}},
		createCountDown : function(){
			var _this = this;
			$.each( _this.products, function( key, val ) {
				  _this.countDown(val.countdown, val.code)
				})
		},
		nameId : function(){return this.id},
		countDown : function(count, id){
			var countDownDate = new Date(count).getTime();

			// Update the count down every 1 second
			var x = setInterval(function() {

			  // Get todays date and time
			  var now = new Date().getTime();

			  // Find the distance between now and the count down date
			  var distance = countDownDate - now;

			  // Time calculations for days, hours, minutes and seconds
			  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
			  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

			  // Display the result in the element with id="demo"
			  
			  template = "<li><span>"+days+" D</span></li>"+
						 "<li><span>"+hours+" M</span></li>"+
						 "<li><span>"+minutes+" M</span></li>"+
						 "<li><span>"+seconds+" S</span></li>"
			  

			  // If the count down is finished, write some text 
			  if (distance < 0) {
				clearInterval(x);
			  template = "<li><span> EXPIRED </span></li>"
			  }
			  if (days > 0) {
				clearInterval(x);
				template = "<li><span>"+days+" days left</span></li>"
			  }			  
			  
			  $("."+id+" .product-countdown").html(template)
			  
			  
			}, 1000);			
			
		}
	},
	mounted: function(){
	this.createCountDown()
  // PRODUCTS SLICK
  
  var _this = this;
  $('#product-slick-' + this.nameId()).slick({
    slidesToShow: parseInt(_this.num),
    slidesToScroll:parseInt(_this.num),
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: true,
    arrows: false,
    appendDots: '.product-slick-dots-'+this.nameId(),
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('#banner-slick-' + this.nameId()).slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 300,
    dots: false,
    arrows: false,
	autoplaySpeed: 5000,
    appendDots: '.banner-slick-dots-'+this.nameId(),
    responsive: [{
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });  
	}
	
})

Vue.component('dealsoftheday-component', {
	template: `
	<div class="section">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<dealsofthedayone-component title="DEALS OF THE DAY" id="1" :num="3"></dealsofthedayone-component>
			<!-- /row -->

			<!-- row -->
			<dealsofthedayone-component title="DEALS OF THE DAY" id="2" :num="3"></dealsofthedayone-component>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>	
	`
})

Vue.component('bigbanners-component', {
	template: `
<div class="section section-grey">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<div class="row">
				<!-- banner -->
				<div class="col-md-8">
					<div class="banner banner-1">
						<img src="./img/banner13.jpg" alt="">
						<div class="banner-caption text-center">
							<h1 class="primary-color">HOT DEAL<br><span class="white-color font-weak">Up to 50% OFF</span></h1>
							<button class="primary-btn">Shop Now</button>
						</div>
					</div>
				</div>
				<!-- /banner -->

				<!-- banner -->
				<div class="col-md-4 col-sm-6">
					<a class="banner banner-1" href="#">
						<img src="./img/banner11.jpg" alt="">
						<div class="banner-caption text-center">
							<h2 class="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				<!-- /banner -->

				<!-- banner -->
				<div class="col-md-4 col-sm-6">
					<a class="banner banner-1" href="#">
						<img src="./img/banner12.jpg" alt="">
						<div class="banner-caption text-center">
							<h2 class="white-color">NEW COLLECTION</h2>
						</div>
					</a>
				</div>
				<!-- /banner -->
			</div>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>	
	`
})

var homePage = { template: `<div>
	
	<!-- /HOME -->
	<homepageSlider-component></homepageSlider-component>
	<!-- section -->
	<banners-component></banners-component>
	<!-- /section -->

	<!-- section -->
	<dealsoftheday-component></dealsoftheday-component>

	<!-- /section -->

	<!-- section -->
	<bigbanners-component></bigbanners-component>
	<!-- /section -->

	<!-- section -->
	<div class="section">
		<!-- container -->
		<div class="container">
			<!-- row -->
			<dealsofthedayone-component title="LATEST PRODUCTS" :num="3" :id="5"></dealsofthedayone-component>
			<!-- /row -->

			<!-- row -->
			<dealsofthedayone-component title="" :num="4" :id="4"></dealsofthedayone-component>
			<!-- /row -->

			<!-- row -->
			<dealsofthedayone-component title="Picked For You" :num="4" :id="3"></dealsofthedayone-component>
			<!-- /row -->
		</div>
		<!-- /container -->
	</div>
	</div>`,
	mounted: function(){
  // PRODUCT DETAILS SLICK
  $('#product-main-view').slick({
    infinite: true,
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
    centerMode: true,
    focusOnSelect: true,
    asNavFor: '#product-main-view',
  });		
	}
 }