$(document).ready(function () {
    $('.table-switcher-hide').click(function () {
        let toHide = $(this).attr('data-to-hide');
        $(toHide).removeClass('open')
        $(this).prev().removeClass('hidden')
        $(this).addClass('hidden')
    })
    $('.table-switcher-show').click(function () {
        let toHide = $(this).attr('data-to-hide');
        $(toHide).addClass('open')
        $(this).next().removeClass('hidden')
        $(this).addClass('hidden')
    })
})