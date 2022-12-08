$(document).ready(function () {
    $('.product__slider').slick({
        slidesToShow: 2,
        variableWidth: false,
        prevArrow: '<div class="arrow arrow-prev"><img src="assets/img/product-page/prev.svg" alt="prev"></div>',
        nextArrow: '<div class="arrow arrow-next"><img src="assets/img/product-page/next.svg" alt="next"></div>',
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '70px',
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                }
            }
        ]
    });


    $('.product__acc-title').on('click', function () {
        let data_id = $(this).attr('data-id')
        if ($('.product__acc[data-id="' + data_id + '"]').hasClass('show'))
            $('.product__acc[data-id="' + data_id + '"]').removeClass('show')
        else
            $('.product__acc[data-id="' + data_id + '"]').addClass('show')
    })
    $('.product__acc-mobile-title').on('click', function () {
        let data_id = $(this).attr('data-id')
        if ($('.product__acc-mobile[data-id="' + data_id + '"]').hasClass('show'))
            $('.product__acc-mobile[data-id="' + data_id + '"]').removeClass('show')
        else
            $('.product__acc-mobile[data-id="' + data_id + '"]').addClass('show')
    })
});