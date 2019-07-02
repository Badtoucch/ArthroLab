//=include ../components/e_composition/composition.js


  // var $menu = $("#menu");
  // $(window).scroll(function(){
  // 		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
  // 				$menu.removeClass("default").addClass("fixed");
  // 		} else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
  // 				$menu.removeClass("fixed").addClass("default");
  // 		}
  // });
  $("#toggle-mnu").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass("on");
    $(this)
      .parent()
      .toggleClass("navbar_hide");
    $(this)
      .parent()
      .toggleClass("fixed-btn");
  });

$(".reviews-content").on("afterChange", function(event, slick, currentSlide) {
  $(this)
    .find(".slick-slide.content-plus")
    .not(".slick-active")
    .removeClass("content-plus");
});
$(".reviews-box__cbtn").on("click", function() {
  this.parentElement.parentElement.classList.toggle("content-plus");
});
$(".reviews-content").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
	arrows: true,
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
				slidesToScroll: 2,
				centerMode: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
				centerMode: false
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
				centerMode: false
      }
    }
  ]
});
$(document).ready(function(){
	$('.nav-item a, .menu__item a').click( function(){ 
var scroll_el = $(this).attr('href'); 
			if ($(scroll_el).length != 0) { 
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top-56 }, 1000); 
			}
		return false; 
	});
});

