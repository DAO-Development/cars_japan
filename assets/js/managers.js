$(document).ready(function () {
    if ($(window).width() >= '1300') {
        $('.managers-slider').slick({
            slidesToShow: 4,
            variableWidth: false,
            arrows: true,
            prevArrow: '<div class="arrow-prev arrow"><img src="assets/img/contacts/prev.svg"></div>',
            nextArrow: '<div class="arrow-next arrow"><img src="assets/img/contacts/next.svg"></div>',
            dots: false,
            infinite: false
        });
    } else if ($(window).width() >= '1024') {
        $('.managers-slider').slick({
            slidesToShow: 3.2,
            variableWidth: false,
            arrows: false,
            dots: false,

            infinite: false
        });
    } else if ($(window).width() >= '768') {
        $('.managers-slider').slick({
            slidesToShow: 2.4,
            variableWidth: false,
            arrows: false,
            dots: false,

            infinite: false
        });
    } else if ($(window).width() >= '568') {
        $('.managers-slider').slick({
            slidesToShow: 1.8,
            variableWidth: false,
            arrows: false,
            dots: false,

            infinite: false
        });
    } else if ($(window).width() >= '414') {
        $('.managers-slider').slick({
            slidesToShow: 1.3,
            variableWidth: false,
            arrows: false,
            dots: false,

            infinite: false
        });
    } else if ($(window).width() >= '360') {
        $('.managers-slider').slick({
            slidesToShow: 1.1,
            variableWidth: false,
            arrows: false,
            dots: false,

            infinite: false
        });
    } else if ($(window).width() < '360') {
        $('.managers-slider').slick({
            slidesToShow: 1,
            variableWidth: false,
            arrows: false,
            dots: false,

            infinite: false
        });
    }
})