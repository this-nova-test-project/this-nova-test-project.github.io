$(document).ready(function() {

	$('.photos').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: $('.prevArrow'),
		nextArrow: $('.nextArrow'),
		responsive: [
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 2,
		      slidesToScroll: 1,
		    }
		  },
		  {
		    breakpoint: 400,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		    }
		  }
		]  

	});

	$(window).resize(function(){
		if($(window).width() <= 991) {
			$('header > .infoAboutFilm').css('display' , 'none');
			$('header > .nav').css('display' , 'none');

			$('.mob-header').css('display' , 'block');
		}
		else {
			$('header > .infoAboutFilm').css('display' , 'block');
			$('header > .nav').css('display' , 'block');

			$('.mob-header').css('display' , 'none');
		}
	});
	if($(window).width() <= 991) {
		if($(window).width() <= 991) {
			$('header > .infoAboutFilm').css('display' , 'none');
			$('header > .nav').css('display' , 'none');

			$('.mob-header').css('display' , 'block');
		}
		else {
			$('header > .infoAboutFilm').css('display' , 'block');
			$('header > .nav').css('display' , 'block');

			$('.mob-header').css('display' , 'none');
		}
	} 

	$('.nav .logo > img').mouseenter(function(){
		$('.infoAboutFilm ul > li:first-child > span').css({'color':'#510100' , 'transition':'0.5s'});
		console.log('Это всё (')
	});

	function deadpoolAnimate() {
		$('.deadpoolHeader > img').addClass('animated bounceInDown');
		$('.deadpoolHeader > img').css('display','block');
	};
	setTimeout(deadpoolAnimate, 500);

	console.log('Привет ! ');
	console.log('Прицелься на звездочку !');
		
});

