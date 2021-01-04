(function ($) {
    $(document).ready(function () {
        "use strict";

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.header-section').addClass('sticky');
            } else {
                $('.header-section').removeClass('sticky');
            }
        });

    })
})(jQuery);