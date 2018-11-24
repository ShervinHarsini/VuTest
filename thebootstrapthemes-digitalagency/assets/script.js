 jQuery(document).ready(function($) {
 
    $(".scroll a, .navbar-brand, .gototop").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');
    $(".scroll li").removeClass('active');
    $(this).parents('li').toggleClass('active');
    });
    });






var wow = new WOW(
  {
    boxClass:     'wowload',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true        // act on asynchronously loaded content (default is true)
  }
);
wow.init();




$('.carousel').swipe( {
     swipeLeft: function() {
         $(this).carousel('next');
     },
     swipeRight: function() {
         $(this).carousel('prev');
     },
     allowPageScroll: 'vertical'
 });


var app = new Vue({
  el: '#contact',
  data: {
	err : false,
	dati:{
		name : "",
		email: "",
		message: ""
	},
	percentage : 0,
	result: "",
	choosed : "question",
	choose : {
    question: [{
		title: "Di che servizio hai bisogno?",
		name: "servizio",
		radio: [
		"Creazione grafica e design di un sito web ex-novo",
		"Revisione completa del design di un sito web esistente",
		"Revisione parziale del design di un sito web esistente",
		"Altro"
		],
		value : "",
		textMessage : ""
	},
{
		title: "Qual è la tipologia del sito web?",
		name: "tipo",
		radio: [
			"Sito informativo (solo descrizioni)",
			"Sito portfolio (presenza di immagini e video)",
			"E-commerce",
			"Social media website",
			"Blog",
			"Non lo so, vorrei un consiglio dal professionista",
			"Altro"
		],
		value : "",
		textMessage : ""
	},	
	]
	}

	},
	methods : {
		next : function(val, mess){
			if(!!val && val !== "Altro" || (val === "Altro" && !!mess)){
			this.percentage = Math.floor(this.percentage + parseInt(100 / parseInt(this.choose[this.choosed].length + 2)));
			$(".containerMessage").animate({
    marginLeft: '-=' + $(".row.wowload.fadeInLeftBig.animated").width()
			}, 500);
			} else {
				this.err = true;
			}
		},
		back : function(){
			this.percentage = Math.floor(this.percentage - parseInt(100 / parseInt(this.choose[this.choosed].length + 2)));
			$(".containerMessage").animate({
    marginLeft: '+=' + $(".row.wowload.fadeInLeftBig.animated").width()
}, 500);
		},	
		check : function() {
		     this.err = false;	
		},
		send : function(){
		if(this.validEmail(this.dati.email) && !!this.dati.name){
		this.err = false;
		var len = this.choose[this.choosed]
		_this = this;
		this.sended().then(function(){
		_this.result = "<h3>Inviata, entro 10 min sarai contattato!</h3>"
		_this.result += "<div style=\"font-weight: bold\">Nome</div>"
		_this.result += "<div>"+_this.dati.name+"</div>"
		_this.result += "<div style=\"font-weight: bold\">Email</div>"
		_this.result += "<div>"+_this.dati.email+"</div>"
		_this.result += "<div style=\"font-weight: bold\">Messaggio</div>"
		_this.result += "<div>"+_this.dati.message+"</div>"
		for(var i = 0; i < len.length; i++){
			var item = len[i]
			_this.result += "<div style=\"font-weight: bold\">"+item.title+"</div>"
			if(item.value !== "Altro"){
			_this.result += "<div style=\"font-weight: normal\">"+item.value+"</div>"
			} else {
			_this.result += "<div style=\"font-weight: normal\">"+item.textMessage+"</div>"	
			}
			
		}
		})
		$(".containerMessage").animate({
			marginLeft: '-=' + $(".row.wowload.fadeInLeftBig.animated").width()
			}, 500);
		this.percentage = 100;
		} else {
			this.err = true;
		}
	},
	sended : function(){
		this.result = '<div class="loader"></div>'
		var promise1 = new Promise(function(resolve, reject) {
		  setTimeout(function() {
			resolve('foo');
		  }, 3000);
		});		
		return promise1;
		},
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  }
}) 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

