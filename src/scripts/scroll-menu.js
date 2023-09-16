'use strict'

//Declaración de variables
let menu = $('#menu')
let menu_phone = $('#menu-phone')
let arrow_scroll = $('#scroll')

//Inicializar el menu
$('#menu').addClass('menuUp')
    .removeClass('menuDown')

$('#menu-phone').addClass('menuUp')
    .removeClass('menuDown')

$(document).scroll(function () {

    let x = $(document).scrollTop();

    if (x !== 0) {
        menu.addClass('menuDown')
            .removeClass('menuUp')

        menu_phone.addClass('menuDown')
            .removeClass('menuUp')

        arrow_scroll.fadeIn('slow')

    } else {
        menu.addClass('menuUp')
            .removeClass('menuDown')

        menu_phone.addClass('menuUp')
            .removeClass('menuDown')

        arrow_scroll.fadeOut('slow')
    }

})

//Funcionamiento de la flecha para hacer scroll
arrow_scroll.click(()=>{
    $('html, body').animate({scrollTop: 0},1500)
})