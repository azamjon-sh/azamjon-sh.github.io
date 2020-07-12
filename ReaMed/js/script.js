$(document).ready(function(){
	$(".main-carousel").slick({
		arrows:true,
		prevArrow: $('.main-container .prev'),
		nextArrow: $('.main-container .next')
	});
	$(".discount-slider").slick({
		arrows:true,
		prevArrow: $('.discounts .prev'),
		nextArrow: $('.discounts .next')
	});
	var menuOpen = false;
	$('.menu-btn').click(function(event) {
		if (menuOpen == false) {
			$(this).addClass('open')
			$('.bottom-header').slideDown();
			menuOpen = true
		}
		else {
			$(this).removeClass('open')
			$('.bottom-header').slideUp()
			menuOpen = false
		}
	});
	$(".show-more").click(function() {
		$(this).prev().toggleClass('open');
	});
});