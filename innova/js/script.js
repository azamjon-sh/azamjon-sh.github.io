jQuery(document).ready(function($) {
	$('.sidebar__item').click(function() {
		if (!$(this).hasClass('open')) {
			$('.sidebar__item').removeClass('open')
			$('.sidebar__item').children('.sidebar__list2').slideUp()
			$(this).addClass('open')
			$('.sidebar__item.open .sidebar__list2').slideDown();
		}
		else {
			$('.sidebar__item').removeClass('open')
			$('.sidebar__item').children('.sidebar__list2').slideUp()
		}
	});
	$('.add-to-fav').click(function() {
		$(this).toggleClass('select');
	});
	$('.movie__rating__like').click(function() {
		$(this).toggleClass('chosed');
		$('.movie__rating__dislike').removeClass('chosed')
	});
	$('.movie__rating__dislike').click(function() {
		$(this).toggleClass('chosed');
		$('.movie__rating__like').removeClass('chosed')
	});
	$('.burger').click(function() {
		$('.sidebar').addClass('opened')
	});
	$('.sidebar__close').click(function() {
		$('.sidebar').removeClass('opened')
	});
});