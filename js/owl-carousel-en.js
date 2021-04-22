(function ($) {

  
  // owl slider
 var owlslider = $('.owl-slider');
 owlslider.owlCarousel({

    items:1,
    loop:true,
    nav:false,
    dots:true,
    autoplay:true,
    smartSpeed:3000,
    autoplaySpeed: 3000,
    autoplayTimeout:3000,
    autoplayHoverPause: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
    
   });
  
    // owl nav
    /*$( ".owl-images  .owl-prev").html('<span><i class="fas fa-angle-left"></i></span>');
    $( ".owl-images   .owl-next").html('<span><i class="fas fa-angle-right"></i></span>');*/

     
   })(jQuery);    