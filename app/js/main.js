$(document).ready(function() {

	//Цели для Яндекс.Метрики и Google Analytics
		// $(".count_element").on("click", (function() {
		// 	ga("send", "event", "goal", "goal");
		// 	yaCounterXXXXXXXX.reachGoal("goal");
		// 	return true;
		// }));

	//Chrome Smooth Scroll
		// try {
		// 	$.browserSelector();
		// 	if($("html").hasClass("chrome")) {
		// 		$.smoothScroll();
		// 	}
		// } catch(err) {};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//Ajax sendform
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),
			error: function() {
				swal({
					title: "Ошибка!",
					text: "Не удалось отправить сообщение.",
					html: true,
					type: "error",
					// customClass: "zoom-anim animated-custom",
					confirmButtonText: "Ok",
					confirmButtonColor: "#ce4e4e",
					// animation: "false",
				});
			}
		}).done(function() {
			swal({
				title: "Спасибо!",
				text: "Мы получили Ваше сообщение.",
				html: true,
				type: "success",
				// customClass: "zoom-anim animated-custom",
				confirmButtonText: "Ok",
				confirmButtonColor: "#ce4e4e",
				// animation: "false",
			});
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//isotope sorting
	var $container = $('.projects-box .pr-items').imagesLoaded(function() {
		$container.isotope({
		  itemSelector: '.js-filter',
		  layoutMode: 'fitRows'
		});
		$('.projects-box .cats').on( 'click', 'a', function(e) {
			e.preventDefault();
			$(".projects-box .cats a").removeClass("active");
			$(this).addClass("active");
			var filterValue = $(this).attr('data-filter');
		  $container.isotope({ filter: filterValue });
		});
	});

	//main slider navigation & autoplay
	$('.header-slider .slider-counter .sn').click(function() {
		$(this).parent().find('.sn').removeClass('active');
		$(this).addClass('active');
		var curIndex = $(this).index();
		$(this).parents('.header-slider').find('.slides .item').fadeOut(600);
		$(this).parents('.header-slider').find('.slides .item').eq(curIndex).fadeIn(600);
	});
	var iterate = 1;
	var slideChange = setInterval(function() {
		if($('.header-slider').hasClass('calc')) return false;
		var allElem = $('.header-slider .slider-counter .sn').size();
		var curActive = $('.header-slider .slider-counter .sn.active').index();
		if (curActive == iterate-1) {

		} else {
			(iterate > allElem) ? iterate=1 : '';
			$('.header-slider .slider-counter .sn').eq(iterate-1).trigger('click');
		}
		// console.log(allElem, iterate);
		iterate++;
	}, 4000);

	//mobile menu toggle
	$(".navbutton").click(function() {
	  $(this).toggleClass("active");
	  $(this).parents('.lbar-menu').find('ul').toggleClass('active');
	});

	//phone mask
	$("input[type='tel']").mask("+7(999) 999-99-99");

	//faq questions toggle
	$('.faq-box li').click(function() {
		$(this).toggleClass('active');
		$(this).find('.answer').slideToggle();
	})

	//waypoints
	var waypoints = $('.lfbtitle').waypoint(function(direction) {
		if(direction === 'down') {
			var index = $(this.element).data('index')-1;

			$('.lbar .lbar-title ul li').hide();
			$('.lbar .lbar-title ul li').eq(index).show();
		}
	}, {
		offset: '50%',
	});

	var waypoints = $('.lfbtitle').waypoint(function(direction) {
		if(direction === 'up') {
			var index = $(this.element).data('index')-1;

			$('.lbar .lbar-title ul li').hide();
			$('.lbar .lbar-title ul li').eq(index).show();
		}
	}, {
		offset: '-50%',
	});

	//owl-carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		items:1,
		margin:10,
		nav:true,
		smartSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dragEndSpeed: 1000,
		navText: ['', ''],
		mouseDrag: false,
	});

	//abous slider
	$('.about-slider').owlCarousel({
		loop:true,
		items:1,
		margin:10,
		nav:true,
		smartSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dragEndSpeed: 1000,
		navText: ['', ''],
		// mouseDrag: false,
	});

	//testimonials slider
	$('.testimonials-slider').owlCarousel({
		loop:true,
		// items:2,
		margin:30,
		nav:true,
		smartSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dragEndSpeed: 1000,
		navText: ['', ''],
		responsive:{
      0:{
          items:1
      },
      1200:{
          items:2
      },
	  }
	});

	//build-types toggle
	// $('.main-head .build-types .bt-item').on('click', function() {
	// 	$(this).parent().find('.bt-item').removeClass('active');
	// 	$(this).addClass('active');
	// })

	$('.certs').owlCarousel({
		loop:true,
		items:1,
		margin:10,
		nav:true,
		smartSpeed: 1000,
		autoplaySpeed: 1000,
		navSpeed: 1000,
		dragEndSpeed: 1000,
		navText: ['', ''],
		// mouseDrag: false,
	})

	//slick slider
	$('.slider-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  prevArrow: false,
	  nextArrow: false,
	});

	//magnific-popup
	$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: false,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-slide-bottom'
		});

	//video popup
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	//contacts-container toggle
	$('.contacts-container .navbutton').click(function() {
		$(this).parents('.contacts-container').find('.contacts-box').slideToggle();
	})

	//tabs
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn();
	}).eq(0).addClass("active");

	//yandex map api
	ymaps.ready(init);
	var myMap;

	function init(){
	  myMap = new ymaps.Map("map", {
	    center: [55.763523068996655,37.55254591531368],
	    zoom: 16,
	    controls: [] // delete all controls
	  });
	  myMap.controls.add('zoomControl'); // add zoom control


		//create marks
	  Placemark1 = new ymaps.Placemark([55.763523068996655,37.55655849999997], { hintContent: '', balloonContent: '' },
	    {
	  		iconLayout: 'default#image',
	      iconImageHref: 'img/map-mark.png',
	      iconImageSize: [43, 60],
	      iconImageOffset: [-21, -60]
	  	});
	  //add mark to map
	  myMap.geoObjects.add(Placemark1);
	  myMap.behaviors.disable('scrollZoom');
	}

	//matchheight
	// const mq = window.matchMedia( "(min-width: 768px)" );
	// if (mq.matches) {
	// 	$('.order-box .title').matchHeight({byRow: false});
	// 	$('.order-box .price-box').matchHeight({byRow: false});
	// }



});

$(window).scroll(function() {

	var st = $(this).scrollTop() /8;

	$(".prlx").css({
		"transform" : "translate3d(0px, " + st  + "%, .1px)",
		"-webkit-transform" : "translate3d(0px, " + st  + "%, .1px)"
	});

	$(".prlx_bg").css({
		"background-position" : "center" + st,
	});

	$(".prlx_vertical").css({
		"transform" : "translate3d(0px, " + st  + "%, .1px) rotate(-90deg)",
		"-webkit-transform" : "translate3d(0px, " + st  + "%, .1px) rotate(-90deg)"
	});

});

// $(window).load(function() {

// 	$(".loader_inner").fadeOut();
// 	$(".loader").delay(400).fadeOut("slow");

// });
