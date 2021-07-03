// sticky navigation
$(document).ready(function () {
    let nav_offset_top = $('.header_area').height() + 5;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        var id = $(this).attr('href');
    
        // target element
        var $id = $(id);
        if ($id.length === 0) {
            return;
        }
    
        // prevent standard hash navigation (avoid blinking in IE)
        e.preventDefault();
    
        // top position relative to the document
        var pos = $(id).offset().top - 10;
    
        // animated top scrolling
        $('body, html').animate({scrollTop: pos});
    });

});