$(function () {
   'use strict'

   $(window).on('load', function(){
      $('.preloader').fadeOut();
   })

   $(document).on('scroll', function(){
      var windowSize = $(window).scrollTop();

      console.log(windowSize);

      if(windowSize > 500){
         $('#goTop').fadeIn();
         // $('#goTop').css({
         //    bottom: '40px',
         //    opacity: 1
         // })
      }
      else{
         $('#goTop').fadeOut();
         // $('#goTop').css({
         //    bottom: '500px',
         //    opacity: 0
         // })
      }
   })

   $('#goTop').on('click', function(){
      $('html, body').animate({
         scrollTop: 0
      }, 500)
   })

   // $(window).scroll(function(){
   //    var bottom_to_top = $(this).scrollTop();

   //    if(bottom_to_top > 300){
   //       $('.xyz').addClass('abc');
   //    }
   //    else {
   //       $('.xyz').removeClass('abc');
   //    }
      
   //    });



})