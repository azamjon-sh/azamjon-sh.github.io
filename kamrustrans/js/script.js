jQuery(document).ready(function($) {

  $('.slider__start').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.prevArr'),
    nextArrow: $('.nextArr'),
    
  })
  
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
  });
  $('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
  });
  $('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
  });
  /*End Dropdown Menu*/


  $('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
    msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
  }); 


  $('.accordion__head__costCalc').click(function() {
    $('.accordion__head__callBack').removeClass('active')
    $(this).addClass('active')
    $('.costCalc').show('slow');
    $('.callBack').hide('slow');
  })

  $('.accordion__head__callBack').click(function() {
    $('.accordion__head__costCalc').removeClass('active')
    $(this).addClass('active')
    $('.callBack').show('slow');
    $('.costCalc').hide('slow');
  })

 /* $('.accordion__head__costCalc').click(function() {
    $('.accordion__head__callBack').removeClass('active')
    $(this).addClass('active')
    $('.costCalc').slideDown().removeClass('hide');
    $('.callBack').css({
      display: 'none',
    });

  })

  $('.accordion__head__callBack').click(function() {
    $('.accordion__head__costCalc').removeClass('active')
    $(this).addClass('active')
    $('.callBack').slideDown().removeClass('hide');
    $('.costCalc').css({
      display: 'none',
    });
  })*/
  var i = true;
  $('.options__title').click(function() {
    if (i == true){
      $('.options').slideDown();
      i = false;
    }
    else {
      $('.options').slideUp();
      i = true;
    }
  });  
});