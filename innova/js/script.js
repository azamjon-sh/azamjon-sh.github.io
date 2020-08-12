jQuery(document).ready(function($) {
	$('.list-item').click(function() {
		if (!$(this).hasClass('open')) {
			$('.list-item').removeClass('open')
			$('.list-item').children('.menu_list_1').slideUp()
			$(this).addClass('open')
			$('.list-item.open .menu_list_1').slideDown();
		}
		else {
			$('.list-item').removeClass('open')
			$('.list-item').children('.menu_list_1').slideUp()
		}
	});
	$('.add-to-fav').click(function() {
		$(this).toggleClass('chosed');
	});
	$('.like').click(function() {
		$(this).toggleClass('chosed');
		$('.dislike').removeClass('chosed')
	});
	$('.dislike').click(function() {
		$(this).toggleClass('chosed');
		$('.like').removeClass('chosed')
	});
	$('.burger-btn').click(function() {
		$('.menu').addClass('opened')
	});
	$('.close-menu').click(function() {
		$('.menu').removeClass('opened')
	});
});