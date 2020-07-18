(function($){
	"use strict";

	$( document ).ready( function() {

		// AOS Effects

		AOS.init({
		  startEvent: 'load',
			once: true
		});

		// Landing page navigation toggle button

		$(".nav-toggler").click( function(event){
	    event.preventDefault();
	    if ( $('#nav-icon').hasClass("open") ) {
	        $(".nav-sidebar").stop().animate({right:"-270px"}, 800);
					$(".wrapper").stop().animate({left:"0px"}, 400);
	    } else {
	        $(".nav-sidebar").stop().animate({right:"0px"}, 400);
					$(".wrapper").stop().animate({left:"-220px"}, 800);
	    }
	    $('#nav-icon').toggleClass("open");
	    return false;
		});

		// One page nav smooth scrolling

		if ( ! window.console ) console = { log: function(){} };
		$('.one-page-nav').singlePageNav({
			offset: 0,
			filter: ':not(.external)',
			currentClass: 'active',
			speed: 800
		});

		// Parallax backgrounds effect

		$( window ).resize(function() {
			if ($(window).width() > 768) {
				$('.parallax').parallax("0%", 0.2);
			}
		});

		// Anime effects

		// Creative hero animations

		$(".service-1").hover(function() {
			var icondraw = anime({
			  targets: '.service-1 path',
			  strokeDashoffset: [anime.setDashoffset, 0],
			  easing: 'linear',
			  duration: 2000,
			  delay: function(el, i) { return i * 250 },
			  direction: 'normal',
			  loop: false
			});
		});

		$(".service-2").hover(function() {
			var icondraw = anime({
			  targets: '.service-2 path',
			  strokeDashoffset: [anime.setDashoffset, 0],
			  easing: 'linear',
			  duration: 2000,
			  delay: function(el, i) { return i * 250 },
			  direction: 'normal',
			  loop: false
			});
		});

		$(".service-3").hover(function() {
			var icondraw = anime({
			  targets: '.service-3 path',
			  strokeDashoffset: [anime.setDashoffset, 0],
			  easing: 'linear',
			  duration: 2000,
			  delay: function(el, i) { return i * 250 },
			  direction: 'normal',
			  loop: false
			});
		});

		var planet1 = anime({
		  targets: '.planet-1',
			translateX: 150,
			translateY: 50,
		  direction: 'alternate',
			duration: 200000,
		  loop: true,
		  easing: 'linear'
		});

		var planet2 = anime({
		  targets: '.planet-2',
			translateX: 50,
			translateY: 50,
		  direction: 'alternate',
			duration: 20000,
		  loop: true,
		  easing: 'linear'
		});

		var planet3 = anime({
		  targets: '.planet-3',
			translateX: 100,
			translateY: -50,
		  direction: 'alternate',
			duration: 10000,
		  loop: true,
		  easing: 'linear'
		});

		var planet4 = anime({
		  targets: '.planet-4',
			translateX: 50,
			translateY: 50,
		  direction: 'alternate',
			duration: 10000,
		  loop: true,
		  easing: 'linear'
		});

		var planet5 = anime({
		  targets: '.planet-5',
			translateX: -50,
			translateY: 200,
		  direction: 'alternate',
			duration: 20000,
		  loop: true,
		  easing: 'linear'
		});

		var manfigure1 = anime({
		  targets: '.man-figure-left',
			translateX: 0,
			translateY: -20,
		  direction: 'alternate',
			duration: 2000,
		  loop: true,
		  easing: 'linear'
		});

		var manfigure2 = anime({
		  targets: '.man-figure-right',
			translateX: -30,
			translateY: 0,
		  direction: 'alternate',
			duration: 4000,
		  loop: true,
		  easing: 'linear'
		});

		var morph2 = anime({
		    targets: '.morph-path2',
		    d: [
		      {
						value: [
						'M233.57422,651.77246c129.98828,2.26563,201.22998,185.49219,335.5625,201.33398 c126.72461,14.94727,205.71094-87.4043,213.76563-201.64844c9.51758-134.95313,101.84961-239.64063,104.64063-375.43896 c2.81641-137.30127-85.23828-262.12891-228.26758-221.45117c-67.48145,19.19287-113.81152,46.7168-187.45215,39.3667 c-69.32617-6.91846-135.28662-44.71729-205.02393-45.83203C143.72314,46.1333,43.25635,176.43164,28.58105,291.36084 c-8.61621,67.49561,31.57471,82.75391,51.76758,140.12061c16.41016,46.63281,0.10889,84.45508,3.41406,132.20508 C90.14893,656.0166,150.64795,650.32324,233.57422,651.77246z',
						'M235.80566,651.11035c129.98828,2.26563,201.23047,185.49219,335.5625,201.33398 c126.72461,14.94727,205.71191-87.4043,213.76563-201.64844c9.51758-134.95313,78.375-73.9082,81.16602-209.70703 c2.81543-137.30078-66.96094-306.16406-209.98926-265.48633c-67.48242,19.19287-161.39941-31.43213-227.98877-61.49707 c-63.49854-28.66943-89.55322-65.5498-159.2915-66.66455C145.9541,45.47168,45.4873,175.77002,30.8125,290.69922 c-8.61621,67.49512,84.94141,69.90527,105.13379,127.27051c16.41016,46.63281-53.25781,97.30469-49.95215,145.05469 C92.37988,655.35449,152.87988,649.66113,235.80566,651.11035z' ]
					}
		    ],
		    duration: 8000,
		    direction: 'alternate',
		    autoplay: true,
		    easing: 'linear',
		    elasticity: 100,
		    loop: true
		});

		// Data analysis hero animations

		var cube1 = anime({
		  targets: '.cube-1',
			translateX: 50,
			translateY: 0,
		  direction: 'alternate',
			duration: 10000,
		  loop: true,
		  easing: 'linear'
		});

		var cube2 = anime({
		  targets: '.cube-2',
			translateX: 50,
			translateY: 50,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});

		var cube3 = anime({
		  targets: '.services-cube',
			translateX: 50,
			translateY: 50,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});

		var figure1 = anime({
		  targets: '.figure-1',
			translateX: 20,
			translateY: 0,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});
		var figure2 = anime({
		  targets: '.figure-2',
			translateX: 30,
			translateY: 30,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});
		var figure3 = anime({
		  targets: '.figure-3',
			translateX: 20,
			translateY: 0,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});
		var figure4 = anime({
		  targets: '.figure-4',
			translateX: -30,
			translateY: -20,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});
		var figure5 = anime({
		  targets: '.figure-5',
			translateX: -20,
			translateY: 0,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});
		var figure6 = anime({
		  targets: '.figure-6',
			translateX: -30,
			translateY: -20,
		  direction: 'alternate',
			duration: 8000,
		  loop: true,
		  easing: 'linear'
		});

		// App hero animations

		var circle1 = anime({
		  targets: '.circle-1',
			translateX: 50,
			translateY: 0,
		  direction: 'alternate',
			duration: 5000,
		  loop: true,
		  easing: 'linear'
		});

		var circle2 = anime({
		  targets: '.circle-2',
			translateX: 10,
			translateY: 10,
		  direction: 'alternate',
			duration: 2000,
		  loop: true,
		  easing: 'linear'
		});

		var circle1 = anime({
		  targets: '.circle-1',
			translateX: 5,
			translateY: 10,
		  direction: 'alternate',
			duration: 2000,
		  loop: true,
		  easing: 'linear'
		});

		var circle3 = anime({
		  targets: '.circle-3',
			translateX: -10,
			translateY: -10,
		  direction: 'alternate',
			duration: 3000,
		  loop: true,
		  easing: 'linear'
		});

		var dot = anime({
		  targets: '.hero-dot',
			translateX: 5,
			translateY: -5,
		  direction: 'alternate',
			duration: 5000,
		  loop: true,
		  easing: 'linear'
		});

		// Blog Grid

		var $bloggrid = $("[class*='blog-grid']")

		$bloggrid.isotope({
			itemSelector: '.post',
			percentPosition: true,
			masonry: {
				columnWidth: '.post',
				gutter: 30
			}
		})

		$bloggrid.imagesLoaded().progress( function() {
			$bloggrid.isotope('layout');
		});

		// Portfolio masonry

		var $grid = $("[class*='works-grid']")

		$grid.isotope({
			itemSelector: '.work-item',
			percentPosition: true,
			masonry: {
				columnWidth: '.work-item',
				gutter: 30
			}
		})

		$grid.imagesLoaded().progress( function() {
		  $grid.isotope('layout');
		});

		var iso = $grid.data('isotope');

		if ( $( "a" ).hasClass( "load-more" ) ) {

			$grid.infiniteScroll({
			  path: 'a.load-more',
			  append: '.work-item',
			  history: false,
				outlayer: iso,
				button: 'a.load-more',
				scrollThreshold: false,
				onInit: function () {
	        this.on( 'append', function( event, response, path, items ) {
	        	$grid.imagesLoaded().done( function() {
	            $grid.masonry({
								columnWidth: '.work-item',
								gutter: 30
							});
	          });

	        });
	      }
			});

		}

		// Portfolio filter

		$('.works-filter').on( 'click', 'a.filter', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
			$('.works-filter a').removeClass('btn-primary');
			$(this).closest('a').addClass('btn-primary');
		});

		// Magnific popup

		$('.work-item a').magnificPopup({
			type: 'image',
			gallery: {
		    enabled: true
		  },
			closeBtnInside: false,
	    closeOnContentClick: false,
	    callbacks: {
	      open: function() {
	        var self = this;
	        self.wrap.on('click.pinhandler', 'img', function() {
	          self.wrap.toggleClass('mfp-force-scrollbars');
	        });
	      },
	      beforeClose: function() {
	        this.wrap.off('click.pinhandler');
	        this.wrap.removeClass('mfp-force-scrollbars');
	      }
	    },
	    image: {
				verticalFit: false
			}
		});

		// Video Button

		$('.video-btn').magnificPopup({
			type: 'image',
			closeBtnInside: false,
	    closeOnContentClick: false,
	    callbacks: {
	      open: function() {
	        var self = this;
	        self.wrap.on('click.pinhandler', 'img', function() {
	          self.wrap.toggleClass('mfp-force-scrollbars');
	        });
	      },
	      beforeClose: function() {
	        this.wrap.off('click.pinhandler');
	        this.wrap.removeClass('mfp-force-scrollbars');
	      }
	    },
	    image: {
				verticalFit: false
			}
		});

		// Preloader

		$('#preloader').delay(1000).fadeOut('slow');

		// Counter

		$('.timer').countTo();

		// Owl carousel

		var owlteam = $("#owl-team");
		var owlquote = $(".owl-testimonials");
		var owlquote2 = $(".owl-testimonials-style-2");
		var owlcslider = $("#owl-cslider");
		var owlslider = $("#owl-slider");
		var owlservices = $("#owl-services");
		var owlbrands = $("#owl-brands");
		var owlblogcards = $(".owl-blog-card");
		var owlworks = $(".works-carousel");
		var owlworks2 = $(".works-carousel-style-2");

		owlservices.owlCarousel({
			nav: false,
			autoplay: false,
			scrollPerPage: false,
			loop: true,
			dots: true,
			responsiveClass: true,
			margin: 30,
			items: 3,
			responsive : {
				1200 : {
					items : 3,
				},
				992 : {
					items: 3,
				},
				768 : {
					items:2,
				},
				0 : {
					items:1,
				}
			}
		})

		owlworks.owlCarousel({
			nav: true,
			navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
			scrollPerPage: false,
			loop: false,
			dots: false,
			items: 4,
			margin: 120,
			responsiveClass:true,
			responsive: {
				1200 : {
					items : 4,
				},
				992 : {
					items: 3,
				},
				768 : {
					items:2,
				},
				0 : {
					items:1,
				}
			}
		});

		owlworks2.owlCarousel({
			nav: true,
			navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
			scrollPerPage: true,
			navContainer: '.works-nav',
			loop: false,
			dots: false,
			items: 5,
			margin: 30,
			autoHeight: true,
			smartSpeed: 450,
			stagePadding:30,
			animateOut: 'slideOutDown',
    	animateIn: 'flipInX',
			responsiveClass: true,
			responsive: {
				1200 : {
					items : 5,
				},
				992 : {
					items: 3,
				},
				768 : {
					items:2,
				},
				0 : {
					items:1,
				}
			}
		});

		owlbrands.owlCarousel({
			nav : true,
			navText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			scrollPerPage : false,
			loop:true,
			dots : false,
			autoplay: true,
			responsiveClass:true,
			margin: 60,
			responsive : {
				1200 : {
					items : 5,
				},
				992 : {
					items: 4,
				},
				768 : {
					items:3,
				},
				0 : {
					items:2,
				}
			}
		});

		owlblogcards.owlCarousel({
			nav: true,
			navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
			scrollPerPage: false,
			loop: true,
			dots: false,
			items: 3,
			responsiveClass : true,
			responsive : {
				1200 : {
					items : 3,
				},
				992 : {
					items: 2,
				},
				0 : {
					items:1,
				}
			}
		});

		owlslider.owlCarousel({
			items: 1,
			nav: true,
			navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
			scrollPerPage: false,
			loop: true,
			dots: true,
			autoplay: true,
			autoplayTimeout: 5000
		});

		owlquote.owlCarousel({
			nav: false,
			navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
			scrollPerPage: false,
			loop: true,
			dots: true,
			items: 2,
			responsiveClass : true,
			responsive : {
				1600 : {
					items : 2,
				},
				0 : {
					items:1,
				}
			}
		});

		owlquote2.owlCarousel({
			scrollPerPage: false,
			loop: true,
			dots: true,
			items: 1,
			responsiveClass : true,
		});

		owlcslider.owlCarousel({
			nav: false,
			scrollPerPage: false,
			loop: true,
			dots: true,
			items: 1,
		});

 });

 // Back to top button

 jQuery(window).on('scroll',function(){
 	var scroll = jQuery(window).scrollTop();
 	if (scroll >= 50) {
 	    jQuery(".back-to-top").addClass("show");
 	} else {
 	    jQuery(".back-to-top").removeClass("show");
 	}
 });
 jQuery('a.backToTop').on('click',function() {
 	event.preventDefault();
 	jQuery('html, body').animate({scrollTop: 0}, 610);
 })

 // Pricing switcher

 if ( $( ".toggler" ).hasClass( "toggler--is-active" ) ) {

 var e = document.getElementById("filt-monthly"),
 d = document.getElementById("filt-yearly"),
 t = document.getElementById("switcher"),
 m = document.getElementById("monthly"),
 y = document.getElementById("yearly");

 e.addEventListener("click", function(){
	 t.checked = false;
	 e.classList.add("toggler--is-active");
	 d.classList.remove("toggler--is-active");
	 m.classList.remove("hide");
	 y.classList.add("hide");
 });

 d.addEventListener("click", function(){
	 t.checked = true;
	 d.classList.add("toggler--is-active");
	 e.classList.remove("toggler--is-active");
	 m.classList.add("hide");
	 y.classList.remove("hide");
 });

 t.addEventListener("click", function(){
	 d.classList.toggle("toggler--is-active");
	 e.classList.toggle("toggler--is-active");
	 m.classList.toggle("hide");
	 y.classList.toggle("hide");
 })

}

})(jQuery);
