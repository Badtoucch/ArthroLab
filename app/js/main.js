$(document).ready(function(){
	// var $menu = $("#menu");
	// $(window).scroll(function(){
	// 		if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
	// 				$menu.removeClass("default").addClass("fixed");
	// 		} else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
	// 				$menu.removeClass("fixed").addClass("default");
	// 		}
	// });
	$("#toggle-mnu").on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass("on");
		$(this).parent().toggleClass('navbar_hide');
		$(this).parent().toggleClass('fixed-btn');
	});
});
