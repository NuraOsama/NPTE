(function ($) {
  
    // single select
    $(".js-example-placeholder-single").select2({
      placeholder: "choose",
      allowClear: true,
      maximumSelectionLength: 2,
      "language": {
        "noResults": function(){
            return "no results found";
        },
      }
     });

      //select2  multiple select
      $(".js-example-multiple").select2({
        placeholder: "choose",
        tags: true,
        tokenSeparators: [',', ' ']
       } )

  })(jQuery);