jQuery(document).ready(function($) {
	$('.competition-slider').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		responsive: [
		{
			breakpoint: 1023,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{
			breakpoint: 499,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	})
	$('.clients-item').height($('.clients-item').width())
	
	$(window).resize(function() {
		$('.clients-list .col-6').height($('.clients-list .col-6').width())
	});

	$(window).on('scroll', function (){
		var visible = $('#service').offset().top;
		if ($(this).scrollTop() > visible - 500) {
			$('#service .service-item').addClass('go-animate');
		}
	})
	$(window).on('scroll', function (){
		var visible = $('.clients-list').offset().top;
		if ($(this).scrollTop() > visible - 500) {
			$('.clients-list .clients-item').addClass('go-animate');
		}
	})

	$('.prev').click(function() {
		$('.slider-item').addClass('go-prev')
		setTimeout(delClass, 1000);
	});
	$('.next').click(function() {
		$('.slider-item').addClass('go-next')
		setTimeout(delClass, 1000);
	});
	function delClass() {
		$(".slider-item").removeClass('go-next')
		$(".slider-item").removeClass('go-prev')

	}
});