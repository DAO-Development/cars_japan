$(document).ready(function () {

    $('.auctions__content-pictures').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
    });


    $('.filter__color').addClass('not-visible')
    $('.filter__auctions').addClass('not-visible')
    $('.filter__sell').addClass('not-visible')
    $('.filter__num-lot').addClass('not-visible')
    $('.filter__body-model').addClass('not-visible')
    $('.filter__body-type').addClass('not-visible')
    $('.filter__mileage').addClass('not-visible')
    $('.filter__volume').addClass('not-visible')
    $('.filter__drive').addClass('not-visible')
    $('.filter__num-body').addClass('not-visible')
    $('.filter__rating').addClass('not-visible')
    if ($(window).width() < '1024') {
        $('.filter__price').addClass('not-visible')
        $('.filter__year').addClass('not-visible')
        $('.filter__rating').addClass('not-visible')
    }

    $('.main-filter__lists-more .more').on('click', function () {
        $('.main-filter__lists').addClass('open')
    })

    $('.main-filter__lists-more .less').on('click', function () {
        $('.main-filter__lists').removeClass('open')
    })

    let lists = document.getElementsByClassName('main-filter__list-category')
    let selectedList;
    for (let i = 0; i < lists.length; i++) {
        if (lists[i].classList.contains('active')) {
            selectedList = lists[i]
        }
    }

    // let filterSelect = document.getElementById('main-filter__select');
    // filterSelect.onchange = function () {
    //     selectedList.classList.remove("active")
    //     selectedList = lists[filterSelect.selectedIndex]
    //     selectedList.classList.add("active")
    // };
    let tabs = $('.main-filter__category')

    $('#main-filter__select option').each((i, el) => {
        $(el).val(i)
    })
    console.log($('#main-filter__select option'))
    let select_filter = new Choices($('#main-filter__select')[0], {
        placeholder: true,
        searchEnabled: false,
        shouldSort: false
    })

    select_filter.passedElement.element.addEventListener('change', function (event) {
        selectedList.classList.remove("active")
        selectedList = lists[event.detail.value]
        selectedList.classList.add("active")

        tabs.removeClass('active')
        $('.main-filter__category[data-num=' + event.detail.value + ']').addClass('active')
    })

    tabs.each((i, el) => {
        console.log(el)
        $(el).on('click', function () {
            console.log(el)
            console.log($(el).attr('data-num'))
            $('.main-filter__list-category').removeClass('active')
            $('#list-category-' + $(el).attr('data-num')).addClass('active')

            tabs.removeClass('active')
            $(el).addClass('active')

            select_filter.setChoiceByValue($(el).attr('data-num'))

        })

    })


    $('#filter-btn').on("click", function () {
        console.log('open')
        $('.main-filter__filter').addClass('active')
        $('.main-filter__filter-mobile').addClass('not-visible')
        window.scrollTo(0, 0);
    });
    $('.all-btn').on("click", function () {
        let btn = document.querySelector('.all-btn-svg')
        if (btn.classList.contains('closed')) {
            btn.classList.remove('closed')
            $('.filter__color').removeClass('not-visible')
            $('.filter__sell').removeClass('not-visible')
            $('.filter__auctions').removeClass('not-visible')
            $('.filter__num-lot').removeClass('not-visible')
            $('.filter__body-model').removeClass('not-visible')
            $('.filter__body-type').removeClass('not-visible')
            $('.filter__mileage').removeClass('not-visible')
            $('.filter__volume').removeClass('not-visible')
            $('.filter__drive').removeClass('not-visible')
            $('.filter__num-body').removeClass('not-visible')
            $('.filter__rating').removeClass('not-visible')
            if ($(window).width() < '1024') {
                $('.filter__price').removeClass('not-visible')
                $('.filter__year').removeClass('not-visible')
                $('.filter__rating').removeClass('not-visible')
            }
        } else {
            btn.classList.add('closed')
            $('.filter__color').addClass('not-visible')
            $('.filter__auctions').addClass('not-visible')
            $('.filter__sell').addClass('not-visible')

            $('.filter__num-lot').addClass('not-visible')
            $('.filter__body-model').addClass('not-visible')
            $('.filter__body-type').addClass('not-visible')
            $('.filter__mileage').addClass('not-visible')
            $('.filter__volume').addClass('not-visible')
            $('.filter__drive').addClass('not-visible')
            $('.filter__num-body').addClass('not-visible')
            $('.filter__rating').addClass('not-visible')
            if ($(window).width() < '1024') {
                $('.filter__price').addClass('not-visible')
                $('.filter__year').addClass('not-visible')
                $('.filter__rating').addClass('not-visible')
            }
        }
    });
    let title = document.getElementById(('mobile-filter'))
    $('#filter__close-btn').on("click", function () {
        $('.main-filter__filter').removeClass('active')
        $('.main-filter__filter-mobile').removeClass('not-visible')
        window.scrollTo(title.getBoundingClientRect().left, title.getBoundingClientRect().top)
    });
    if ($(window).width() <= '768') {
        $('.clear-btn').on("click", function () {
            $('.main-filter__filter').removeClass('active')
            $('.main-filter__filter-mobile').removeClass('not-visible')
            window.scrollTo(title.getBoundingClientRect().left, title.getBoundingClientRect().top)
        });
        $('.show-btn').on("click", function () {
            $('.main-filter__filter').removeClass('active')
            $('.main-filter__filter-mobile').removeClass('not-visible')
            window.scrollTo(title.getBoundingClientRect().left, title.getBoundingClientRect().top)
        });
    }

    const elements = document.querySelectorAll('.select');
    console.log(elements)
    console.log($('.select'));
    elements.forEach(el => {
        let choices = new Choices(el, {
            placeholder: true,
        });
    });

    $(".model-change").on("click", function () {
        $(".filter__model").html("<select class='model-select'><option class='placeholder' value='placeholder'>Модель</option><option>не Модель 1</option><option> неМодель 2</option></select>")
        let models = document.querySelector('.model-select');
        console.log(models.innerHTML)
        const choices1 = new Choices(models, {
            placeholder: true,
        });
    })





    var slider = document.getElementById('rating');

    noUiSlider.create(slider, {
        start: [3, 9],
        step: 1,
        connect: true,
        range: {
            'min': 3,
            'max': 9
        }
    });




    slider.noUiSlider.on('update', function (values) {
        console.log(values)
        $('#rating-start-val').val(values[0])
        $('#rating-end-val').val(values[1])
        $('#rating-start').html(values[0])
        $('#rating-end').html(values[1])
    });
    $('.sort__item:first input').prop('checked', true)
    $('.sort__item').on('click', function () {
        $('.sort__item').removeClass('active')
        $(this).addClass('active')
        $(this).find('input:not(:checked):first').prop('checked', true)
    })

    let active_list = false
    $('.main-filter__mods-show').on('click', function () {
        if (active_list) {
            $('.main-filter__mods-show').removeClass('active')
            $('.main-filter__mods-list').removeClass('active')
            active_list = false
        }
        else {

            $('.main-filter__mods-show').addClass('active')
            $('.main-filter__mods-list').addClass('active')
            active_list = true
        }
    })



    const ctx = document.getElementById('myChart').getContext('2d');
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

    const labels = ['1-10 Apr', '10-20 Apr', '20-30 Apr', '1-10 May', '10-20 May', '20-31 May'];
    const data = {
    labels: labels,
    datasets: [
        {
            label: 'Цена в йенах',
            data: [1,2,3,4,4,3],
            borderColor: 'rgba(60, 225, 126, 1)',
            backgroundColor: 'rgba(60, 225, 126, 1)',
            yAxisID: 'y',
        },
        {
            label: 'Цена в рублях',
            data: [7, 7, 2, 3, 3,5],
            borderColor: 'rgba(60, 126, 225, 1)',
            backgroundColor: 'rgba(60, 126, 225, 1)',
            yAxisID: 'y1',
        },
        {
            type: 'bar',
            label: 'Количество объявлений',
            data: [9, 3, 2, 1,9,6],
            // borderColor: Utils.CHART_COLORS.blue,
            backgroundColor: 'rgba(188, 0, 45, .7)',

            yAxisID: 'y2',
        }

    ]
    };

    let ratio = window.innerWidth / window.innerHeight * 1.2;
    const myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            aspectRatio: ratio,
            responsive: true,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            stacked: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Статистика продаж по аукционам Honda за 6 месяцев'
                }
            },
            scales: {
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',

                    // grid line settings
                    grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                },

                y2: {
                    type: 'linear',
                    display: false,
                    position: 'right',

                    // grid line settings
                    grid: {
                        drawOnChartArea: false, // only want the grid lines for one axis to show up
                    },
                }
            }
        },
    });






});
