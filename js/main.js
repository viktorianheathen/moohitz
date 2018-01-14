/* -----------------------------------------------------> initialize swiper when document ready*/
$(document).ready(function () {
   var mySwiper = new Swiper ('.swiper-container', {
     spaceBetween: 30,
     effect: 'fade',
     pagination: {
        el: '.swiper-pagination',
      }
   });
   function closeMenu()
   {
     $('.menuInner').removeClass('opened');
     $('.menuInner').addClass('closed');
     $('.mobileMenu__overlay').fadeOut(500, function(){
       $('#mobileMenu').removeClass('opened');
       $('body').removeClass('locked');
     });
   }
   $('#drop_menu').click(function(){
     $('body').addClass('locked');
     $('#mobileMenu').addClass('opened');
     $('.mobileMenu__overlay').fadeIn();
     $('.menuInner').addClass('opened');
     $('.menuInner').removeClass('closed');
   });
   $('.mobileMenu__overlay').click(function(){closeMenu();});
   $('#closeMenu').click(function(){closeMenu();});


   $('.product__add').on('click', function(){
     var th_el = $(this);
     th_el.attr('disabled', 'disabled');
     setTimeout(function() {
       th_el.addClass('product__add-inCart');
     },1000);
   });
 });
