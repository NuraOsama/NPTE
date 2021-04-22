(function ($) {

    "use strict";
    new WOW().init();


    //preloader

    let  mainStatus  = $('.preloader-status'),
    mainBody = $('body'),   
    mainPreloader  = $('.preloader');
    window.onload = function() {
    mainStatus.fadeOut();
    mainPreloader.delay(500).fadeOut('slow');
    mainBody.addClass('loaded').css({
        'overflow': 'auto'
    });
    
   }
 
   //body fadeIn animation
   mainBody.fadeIn(500);


   // btn mouseenter && mouseout

   $('.btn,.form-btn').on('mouseenter', function(e) {
      let parentOffset = $(this).offset(),
         relX = e.pageX - parentOffset.left,
         relY = e.pageY - parentOffset.top;
     $(this).find('span').css({top:relY, left:relX})
   })
   .on('mouseout', function(e) {
     let parentOffset = $(this).offset(),
         relX = e.pageX - parentOffset.left,
         relY = e.pageY - parentOffset.top;
     $(this).find('span').css({top:relY, left:relX})
   });


  // checkbox Route navigation

  let AdminstratorURL="https://nuraosama.github.io/NPTE/home-adminstrator.html";
  let InstructorURL="https://nuraosama.github.io/NPTE/home-instructor.html";

  $("#instractor-text").hide();
  $("#learner-text").hide();
  $('#administrator').on('change', function(event) {
    if($(event.target).is(':checked')){

      window.location=AdminstratorURL;
      
    }
  
  });

  $("#instractor").on('change',function(event) {
    if($(event.target).is(':checked')){

      window.location=InstructorURL;

    }
  })
  if(window.location.pathname == AdminstratorURL){

    $("#administrator").attr('checked', true);
    $("#instractor").attr('checked', false);
    $("#administrator-text").show();
    $("#instractor-text").hide();

  }

  if(window.location.pathname == InstructorURL){

    $("#instractor").attr('checked', true);
    $("#administrator").attr('checked', false);
    $("#instractor-text").show();
    $("#administrator-text").hide();

  }
   
  // modal
   
   $(document).on('show.bs.modal', function (event) {
    if (!event.relatedTarget) {
        $('.modal').not(event.target).modal('hide');
    
    };
    if ($(event.relatedTarget).parents('.modal').length > 0)
     {
        $(event.relatedTarget).parents('.modal').modal('hide');
       
    };
    $('body').addClass('modal-open');
    $('.modal .modal-dialog').addClass('zoomIn   animated show modal-dialog-centered');
    $('.modal .modal-dialog').removeClass('zoomOut hide');
    mainBody.addClass('hide-flow');
  });

  $(document).on('shown.bs.modal', function () {

    if ($('body').hasClass('modal-open') == false) {
        $('body').addClass('modal-open');
        $('.modal .modal-dialog').addClass('zoomIn   animated show modal-dialog-centered');
        $('.modal .modal-dialog').removeClass('zoomOut hide');
        mainBody.addClass('hide-flow');
        
    };
   
    
  });

  $(document).on('hide.bs.modal', function () {
  
     mainBody.removeClass('hide-flow');
        
  });

  
   // auto complete
   $(".form-control").attr("autocomplete","off");

   // modal inputs
		
		$(" .form-control").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("has-content");
			}else{
				$(this).removeClass("has-content");
			}
		});



    // search 
  
    $(".search-form .form-control").on("keyup", function(event){

      let searchVal=event.target.value;

      if(searchVal){

       $(".search-icon").hide();
       $(".search-close").show();
       $(".search-close").click(function(){
 
        event.target.value="";
        $(this).hide();
        $(".search-icon").show();

       });

     }
     else{

      $(".search-icon").show();
      $(".search-close").hide();

   }
  });
 
 
   //sub menu

   $('.card-list .main-nav-link').on('click', function() {
    if(!$(this).hasClass('menudrop')) {
        $('.card-sub-menu', $(this).parents("ul")).slideUp(400);
        $('.main-nav-link', $(this).parents("ul")).removeClass('menudrop');
        $(this).next("ul").slideDown(400);
        $(this).addClass('menudrop');
        $(".submenu-item").addClass('toggle');
      } else if($(this).hasClass('menudrop')) {
        $(this).removeClass('menudrop');
        $(this).next("ul").slideUp(400);
        $(".submenu-item").removeClass('toggle');
    }
});


   // toggle paid courses
   $(".paid-courses").fadeOut();

   $(".toggle-custom").click(function(){
     
    $(".paid-courses").fadeToggle();

   });


    // table sperate

    $("table tbody tr").after('<tr class="tr-spacer"/>');
    $("table tbody tr:last-child").after().remove();

    // toggle enroll

    $(".main-toggle").on( "click",function(event){

      let targetenroll=event.target;

      $(targetenroll).parents('td').addClass('fade-toggle');
    
    });

    $(".sub-toggle").click(function(event){

      let targetunenroll=event.target;

      $(targetunenroll).parents('td').removeClass('fade-toggle');
      
    });

    // toggle synchronize

     $(".minus-text").hide();

     $(".plus-text").click(function(event){
     
      let targetplus=event.target
      $(targetplus).next(".minus-text").show();
       $(this).hide();

    });

    $(".minus-text").click(function(event){

      let targetminus=event.target
      $(targetminus).prev(".plus-text").show();
      $(this).hide();
      
    });


    // toggle view answers
    
    $(".answer-link").click(function(){
     
      $('.view-answer').toggleClass('toggle-view');
       

    });

    // reset checkbox

  /*  $(".reset").fadeOut();

  $('.custom-checkbox').each(function(){
  
     $('.custom-checkbox .custom-control-input').on('change',function(){
     
        if($(this).is(':checked')){
       
           $(".reset").fadeIn();
  
        }
        else{

            $(".reset").fadeOut();

        }
      
      
      });

    })*/

  /*  $('.collapsed .custom-control-input').on('click', function(e) {
      e.stopPropagation();
      $(this).parent().trigger('click');   // <---  HERE
  });
  
  $('.collapse').on('show.bs.collapse', function(e) {
      if(!$('.collapsed .custom-control-input').is(':checked'))
      {
          return false;
      }
  });*/
 

// count Input
let num=0;
$(".btn-subtract").click(function(){

  
  $(".counter").each(function(){

     $(".counter").val(num--);

  });

});

$(".btn-add").click(function(){

  $(".counter").each(function(){
  
    $(".counter").val(num++);
  
  });
})
 
    //tooltip
    $('body').tooltip({

      selector: '[data-toggle="tooltip"]',
      boundary: "window",
      container: 'body',
      trigger: 'hover',
      animate: true

  });
  

  //hide the tooltip
   $(document).on('click', ".btn", function () {

       $(this).tooltip('dispose');
   });

   // scroll to top
          
    $(window).scroll(function(){
          if($(this).scrollTop() > 300) {
        
            $(".auto-scroll-to-top").removeClass("non-hover");                 
             $(".auto-scroll-to-top").addClass("visible");  
           } else {
        
            $(".auto-scroll-to-top").addClass("non-hover");
            $(".auto-scroll-to-top").removeClass("visible");
           }        
    });
             

    $('.auto-scroll-to-top').on('click touchend', function(event) {
          $("html, body").animate({scrollTop: 0}, 1000);
           event.preventDefault();
     });


})(jQuery);




