(function ($) {
  
      // single select
      $(".js-example-placeholder-single").select2({
        placeholder: "اختر",
        allowClear: true,
        maximumSelectionLength: 2,
        "language": {
          "noResults": function(){
              return "لم يتم العثور على نتائج";
          },
        }
       });

      //select2  multiple select
      $(".js-example-multiple").select2({
        placeholder: "اختر",
        tags: true,
        tokenSeparators: [',', ' ']
       } )

    })(jQuery);
