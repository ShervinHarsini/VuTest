
Vue.component('lang-component', {
	
	template: ['<ul class="custom-menu">',
		'<li  v-for="lang in languages" :key="lang.code"><a href="#" v-on:click="chooseLanguage(lang.code)">{{lang.label}}</a></li>',
	'</ul>'].toString().replace(/\,/g, ""),
	props : {
		languages : Array
	},
	methods:{
		chooseLanguage : function(lang){
			this.$emit('dataglobal', lang)
		}
	}
	
	
})

Vue.component('currency-component', {
	
	template: [	'<ul class="custom-menu">',
		'<li v-for="cur in currency" :key="cur.code" ><a href="#" v-on:click="chooseCurrency(cur.code)">{{cur.label}}</a></li>',
	'</ul>'].toString().replace(/\,/g, ""),
	props : {
		currency : Array
	},
	methods:{
		chooseCurrency : function(currency){
			this.$emit('currencychange', currency)
		}
	}
	
	
})

Vue.component('logo', {
	template : [
	'<div class="header-logo">',
	'<a class="logo" v-bind:href="url">',
	'<img v-bind:src="srcImgOfImg" alt="">',
	'</a>',
	'</div>'
	].toString().replace(/\,/g,""),
	props : ['src-img','url'],
	data : function() { return {
		srcImgOfImg : './img/' + this.srcImg
	}
	}
})


Vue.component('menu-component',{
	template : [
		'<ul class="header-top-links">',
			'<li><a href="#">Store</a></li>',
			'<li><a href="#">Newsletter</a></li>',
			'<li><a href="#">FAQ</a></li>',
			'<li class="dropdown default-dropdown">',
				'<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{lang}}<i class="fa fa-caret-down"></i></a>',
				'<lang-component v-on:dataglobal="changeLanguage" v-bind:languages="settings.Languages" ></lang-component>',
			'</li>',
			'<li class="dropdown default-dropdown">',
				'<a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">{{currency}}<i class="fa fa-caret-down"></i></a>',
				'<currency-component v-on:currencychange="changeCurrency" v-bind:currency="settings.Currency"></currency-component>',
			'</li>',
		'</ul>'	
	].toString().replace(/\,/g,""),
	props: ['lang', 'currency', 'settings'],
	methods: {
		  changeLanguage : function (Lang){
			  this.$emit('changelanguage', Lang)
		  },
		  changeCurrency : function (cur){
			  this.$emit('currencychange', cur)
		  }
	}
}
)

Vue.component('search-component', {
	template: [
		'<form>',
			'<input class="input search-input" type="text" :placeholder="dict.EnterKeyword">',
			'<select class="input search-categories">',
				'<option v-for="cat in categories" :value="cat.code">{{dict[cat.label]}}</option>',
			'</select>',
			'<button class="search-btn"><i class="fa fa-search"></i></button>',
		'</form>'	
	].toString().replace(/\,/g,""),
	props:['categories','dict']
	
})


Vue.component('verticalmenu-component', {

template : [
'<div class="category-nav show-on-click">',
					'<span class="category-header">Categories <i class="fa fa-list"></i></span>',
					'<ul class="category-list">',
						'<li v-for="linkItem in menuItems" class="dropdown side-dropdown">',
							'<a :class="{\'dropdown-toggle\': !!linkItem.menu.length}" v-bind:data-toggle="!!linkItem.menu.length ? \'dropdown\': \'\'" v-bind:aria-expanded="!!linkItem.menu.length">{{linkItem.linkName}} <i v-if="linkItem.menu.length" class="fa fa-angle-right"></i></a>',
							'<div class="custom-menu">',
								'<div class="row" v-for="item in linkItem.menu">',
									'<div v-if="!itemCol.image" v-for="itemCol in item" v-bind:class="itemCol.className" >',
										'<div v-for = "group in itemCol.content">',
											'<ul class="list-links">',
												'<li>',
													'<h3 class="list-links-title">{{group.title}}</h3></li>',
												'<li v-for="links in group.links"><a v-bind:href="links.link">{{links.label}}</a></li>',
											'</ul>',
											'<hr>',
										'</div>',
									'</div>',
									'<div v-if="itemCol.image" v-bind:class="itemCol.className" v-for="itemCol in item">',
										'<a class="banner banner-1" href="#">',
											'<img :src="itemCol.srcImg" alt="">',
											'<div class="banner-caption text-center">',
												'<h2 class="white-color">{{itemCol.text1}}</h2>',
												'<h3 class="white-color font-weak">{{itemCol.text2}}</h3>',
											'</div>',
										'</a>',
									'</div>',
									'<hr>',
								'</div>',
							'</div>',
						'</li>',
					'</ul>',
				'</div>',
].toString().replace(/\,/g,""),
data : function(){return {
	
	menuItems : [
	{
	linkName : "Jewelry & Watches",
	menu :
		[		
			[   
				{
					className : "col-md-4",
					image : false,
					content : [
					{title : "Categories",
					links : [
						{link: "#", label: "Women’s Clothing"}
						]
					},
					{title : "Categories",
					links : [
						{link: "#", label: "Women’s Clothing"}
						]
					}
					]
				},
				{
					className : "col-md-4",
					content : [
					{title : "Categories",
					links : [
						{link: "#", label: "Women’s Clothing"}
						]
					}
					]
				},
				{
					className : "col-md-4",
					image : false,
					content : [
					{title : "Categories",
					links : [
						{link: "#", label: "Women’s Clothing"}
						]
					}
					]
				}
			],
			[
				{
					className : "col-md-12",
					image : true,
					srcImg : "./img/banner05.jpg",
					text1 : "COOL",
					text2 : "WOW",
					content : [
					{title : "Categories",
					links : [
						{link: "#", label: "Women’s Clothing"}
						]
					}
					]
				}			
			]
		]
	}]
}}
}
			
)			
				

new Vue({
  el: '#app',
  data:{
	  Lang : "ENG",
	  Currency : "USD",
	  settings : {
		  Languages : [
		  {code : 'ENG', label : "English (ENG)"},
		  {code : 'ITA', label : "Italiano (ITA)"},
		  ],
		  Currency : [
		  {code : 'USD', label : "USD ($)"},
		  {code : 'EUR', label : "EUR (€)"}
		  ],
		  WelcomeMessage : "WelcomeMessage",
		  categories : [
		  {code : '0', label : "allcategories"},
		  {code : '1', label : "cloths"}
		  ] 
	  },
	  dictionary:{
	  ENG : {
		  allcategories : "All",
		  cloths : "Cloths",
		  WelcomeMessage : "Welcome to E-shop!",
		  EnterKeyword : "Enter your keyword"
	  },
	  ITA : {
		  allcategories : "Tutto",
		  cloths : "Vestiti",
		  WelcomeMessage : "Benvenuto su E-shop!",
		  EnterKeyword : "Cerca"
	  },
	  },
	  date : new Date().getFullYear(),
	  selectedDict : {}
  },
  methods: {
	  changeLanguage : function (Lang){
		  this.Lang = Lang;
	  },
	  changeCurrency : function (cur){
		  this.Currency = cur;
	  }
  },
  beforeMount: function(){
	  this.selectedDict = this.dictionary[this.Lang]
  },
  updated: function(){
	  this.selectedDict = this.dictionary[this.Lang]
  }
  
}
)