'use strict'

window.addEventListener('load', function () {

    let glider = new Glider(document.querySelector('.client-slider__list--client'), {

        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        dots: '.client-slider__pagination',
        arrows: {
            prev: '.content-slider__left--client',
            next: '.content-slider__rigth--client'
        },
        responsive: [
            {
                breakpoint: 500,
                settings: {

                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {

                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },{
                
                breakpoint: 1100,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            }
        ]
    })

    let autoScroll_2 = setInterval (()=>{
        $('.client-slider__content .content-slider__rigth--client').click()
    }, 3000)
})