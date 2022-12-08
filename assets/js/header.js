let status1 = 0;
let status2 = 0;
let status3 = 0;


$("#price").mouseenter(function () {
    status1++
    console.log(status1)
    $('.header__nav a').removeClass("hover")
    $("#price").addClass('hover');
    $(".header__hover").removeClass("vis")
    $(".header__hover-1").addClass("vis")
});

$(".header__hover-1").mouseenter(function () {
    status1++;
    console.log(status1 + 'hover')

});

$("#price").mouseleave(function () {
    status1--;
    console.log(status1)

    setTimeout(() => {
        if (status1 == 0) {
            $(".header__hover-1").removeClass("vis")

            $('.header__nav a').removeClass("hover")

        }
    }, 100);

});

$(".header__hover-1").mouseleave(function () {
    status1--;
    console.log(status1)

    if (status1 == 0) {
        $(".header__hover-1").removeClass("vis")

        $('.header__nav a').removeClass("hover")

    }
});

$("#au-online").mouseenter(function () {
    status2++

    $('.header__nav a').removeClass("hover")
    $("#au-online").addClass('hover');
    $(".header__hover").removeClass("vis")

    $(".header__hover-2").addClass("vis")

});

$("#au-online").mouseleave(function () {
    status2--;
    setTimeout(() => {
        if (status2 == 0) {

            $('.header__nav a').removeClass("hover")

            $(".header__hover-2").removeClass("vis")
        }
    }, 100);

});
$(".header__hover-2").mouseenter(function () {
    status2++;
})
$(".header__hover-2").mouseleave(function () {
    status2--

    setTimeout(() => {
        if (status2 == 0) {

            $('.header__nav a').removeClass("hover")

            $(".header__hover-2").removeClass("vis")
        }
    }, 100);
});



$("#info").mouseenter(function () {
    status3++;

    $('.header__nav a').removeClass("hover")
    $("#info").addClass('hover');
    $(".header__hover").removeClass("vis")

    $(".header__hover-3").addClass("vis")

});

$("#info").mouseleave(function () {
    status3--;
    setTimeout(() => {
        if (status3 == 0) {

            $('.header__nav a').removeClass("hover")

            $(".header__hover-3").removeClass("vis")
        }
    }, 100);

})

$(".header__hover-3").mouseenter(function () {
    status3++;
})

$(".header__hover-3").mouseleave(function () {
    status3--;
    setTimeout(() => {
        if (status3 == 0) {

            $('.header__nav a').removeClass("hover")

            $(".header__hover-3").removeClass("vis")
        }
    }, 100);
});

$('.modal-city-open').on('click', function () {
    $('.modal-city').addClass('vis')
})

$('.modal-city__close').on("click", function () {
    $('.modal-city').removeClass('vis')
})