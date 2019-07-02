function compositionApp() {

	let active = 4;

	$('.composition__item-' + active).addClass('active').siblings().removeClass('active');

	$('.composition__item').click(function(){

		const className = $(this).attr('class');
		const numberReg = className.split("-")[1];

		const number = +numberReg.match(/\d/g);
		active = number;

		$('.composition__item-' + number).addClass('active').siblings().removeClass('active');

	})

	$('.arrow-top').click(function(){
		if(active == 1) {
			return
		}
		active--
		$('.composition__item-' + active).addClass('active').siblings().removeClass('active');
	});

	$('.arrow-down').click(function(){
		if(active == 7) {
			return
		}
		active++
		$('.composition__item-' + active).addClass('active').siblings().removeClass('active');
	});
}

compositionApp();

