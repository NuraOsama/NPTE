(function ($) {
 
 
 
  // fancy-box images

  $(".fancybox-img")
  .fancybox({
      padding    : 0,
      margin     : 5,
      openEffect	: 'elastic',
      closeEffect	: 'elastic',
      autoCenter : true,
      autoPlay:false,
      afterLoad  : function () {
        
          $.extend(this, {
              aspectRatio : false,
              type    : 'html',
              width   : 800,
              height  : 600,
              content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size:100% 100%; background-position:center;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
          });
      }
  });



  // fancy-box video
 $('.fancybox-video').fancybox({
    openEffect  : 'elastic',
    closeEffect : 'elastic',
    helpers : {
      media : {}
    },
    iframe:{
  
    preload   : true
    }
  });


})(jQuery);