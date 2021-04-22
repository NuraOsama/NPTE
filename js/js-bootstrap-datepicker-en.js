(function ($) {

    
        $(".input-daterange input").datepicker({
            clearDates: true,
            format:'yyyy-mm-dd',
            clearBtn: true,
            todayHighlight: true,
            multidate: false,
            multidateSeparator: ' - ',
            autoclose: true,
            rtl:false,
        }).on('show.bs.modal', function(event) {
            event.stopPropagation();
        });

})(jQuery);