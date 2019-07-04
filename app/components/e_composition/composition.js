function compositionApp() {

	let active = 4;

	// const arrowTop = $('.composition__arrow-top');
	// const arrowBottom = $('.composition__arrow-bottom');

	$('.composition__item-' + active).addClass('active').siblings().removeClass('active');

	$('.composition__item').click(function(){

		const className = $(this).attr('class');
		const numberReg = className.split("-")[1];

		const number = +numberReg.match(/\d/g);
		active = number;

		$('.composition__item-' + number).addClass('active').siblings().removeClass('active');

	})

	$('.composition__arrow-top').click(function(){
		if(active == 1) {
			return
		}
		active--
		$('.composition__item-' + active).addClass('active').siblings().removeClass('active');
	});

	$('.composition__arrow-bottom').click(function(){
		if(active == 7) {
			return
		}
		active++
		$('.composition__item-' + active).addClass('active').siblings().removeClass('active');
	});
}

compositionApp();

