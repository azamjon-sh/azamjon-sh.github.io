jQuery(document).ready(function($) {

  /* Products block */
  var items = $('.products__item')
  $('.products__categories__item').click(function() {
    if ($(this).hasClass('active')) {
      $('.products__categories__item').removeClass('active')
      $('.products__item').removeClass('active disable')
    }
    else {
      $('.products__categories__item').removeClass('active')
      $(this).addClass('active')

      if ($(".products__categories__item.active").hasClass('front')) {
        $('.products__item__bracket').addClass('disable');
        $('.products__item__drow').addClass('disable');
        $('.products__item__front').removeClass('disable');

      }

      else if ($(".products__categories__item.active").hasClass('brackets')) {
        $('.products__item__front').addClass('disable');
        $('.products__item__drow').addClass('disable');
        $('.products__item__bracket').removeClass('disable');

      }

      else if ($(".products__categories__item.active").hasClass('drow')) {
        $('.products__item__bracket').addClass('disable');
        $('.products__item__front').addClass('disable');
        $('.products__item__drow').removeClass('disable');

      }
    }
  });


  /* more products */

  $('.show__more').click(function() {

    if ($(this).hasClass('hide')) {
      $('.products__item:nth-child(n+9)').slideUp();
      $(this).removeClass('hide').text('ПОКАЗАТЬ ВСЕ')

    }

    else{
      $(this).addClass('hide').text('СКРЫТЬ')
      $('.products__item:nth-child(n+9)').slideDown();

    }
  });
  var header = $('.header'),
  scrollPrev = 0;

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop();
    
    if ( scrolled > 100 && scrolled > scrollPrev ) {
      header.addClass('out');
    } else {
      header.removeClass('out');
    }
    scrollPrev = scrolled;
  });
});