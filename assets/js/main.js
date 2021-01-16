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


        // Initiate datetime picker for pickup date
        $('.booking-form-pickup-date').daterangepicker({
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
        $('.booking-form-pickup-time').daterangepicker({
            timePicker: true,
            singleDatePicker: true,
            timePicker24Hour: true,
            timePickerIncrement: 1,
            timePickerSeconds: true,
            locale: {
                format: 'HH:mm:ss'
            }
        }).on('show.daterangepicker', function (ev, picker) {
            picker.container.find(".calendar-table").hide();
        });

        //testimonial carousel slider
        $('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            items: 1,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        //Menu carousel slider
        $('.menu-slide').owlCarousel({
            margin: 20,
            loop: true,
            nav: true,
            navText: ["<img src='assets/images/arrow-left.svg' alt=''>", "<img src='assets/images/arrow-rights.svg' alt=''>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

        //counter up
        $('.counter').countUp();

    })
})(jQuery);