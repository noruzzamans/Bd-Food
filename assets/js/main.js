(function ($) {
    $(document).ready(function () {
        "use strict";

        // sticky header
        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.header-section').addClass('sticky');
            } else {
                $('.header-section').removeClass('sticky');
            }
        });


        // init Isotope
        var $grid = $('.product-menu-isotop').isotope({
            // options
        });

        $grid.isotope({
            filter: '.salads'
        });

        // filter items on button click
        $('.isotop_button_wrapper').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        $('.isotop_button_wrapper').on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
        });

        // In your Javascript (external .js resource or <script> tag)
        $('.select-person').select2();


        var bookingFormPickUpDate = $('.booking-form-pickup-date');
        var bookingFormPickUptime = $('.booking-form-pickup-time');

        // Initiate datetime picker for pickup date
        bookingFormPickUpDate.daterangepicker({
            startDate: moment(),
            minDate: moment(),
            singleDatePicker: true,
            timePicker: false,
            showDropdowns: true,
            locale: {
                format: 'DD/MM/YYYY'
            }
        });
        // Initiate datetime picker for pickup date
        bookingFormPickUptime.daterangepicker({
            // startDate: moment(),
            // minDate: moment(),
            singleDatePicker: true,
            pickDate: false,
            timePicker: true,
            showDropdowns: true,
            locale: {
                format: 'HH:mm:ss'
            }
        });

        //counter up
        $('.counter').countUp();

    })
})(jQuery);