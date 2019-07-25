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
		
});

