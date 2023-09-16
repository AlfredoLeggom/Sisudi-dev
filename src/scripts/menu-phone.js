//Variables
let menu_bars = $('.menu-phone__bars #menu-bars')
let dropdown_menu = $('#dropdown-menu')
let arrow_scroll = $('#scroll')

//Inicialización de las clases para el menu
dropdown_menu.addClass('hide-dropdown').removeClass('show-dropdown')

//Inicio de funciones ==============================
function showMenu() {
    //Mostrar menu
    dropdown_menu.removeClass('hide-dropdown').addClass('show-dropdown')
    //Cambiar icono
    menu_bars.removeClass('fa-bars').addClass('fa-times')
}

function hideMenu() {
    //Ocultar menu
    dropdown_menu.removeClass('show-dropdown').addClass('hide-dropdown')
    //Cambiar icono
    menu_bars.removeClass('fa-times').addClass('fa-bars')
}
//Final de funciones ===============================

//Inicio de eventos ================================
menu_bars.click(() => {

    if (menu_bars.hasClass('fa-bars')) {
        showMenu()
        //Para ocultar el back up
        arrow_scroll.fadeOut(600)
        //Para bloquear el scroll de la pagina
        $('html, body').css({
            'overflow': 'hidden',
            'height': '100%'
        })
    } else if (menu_bars.hasClass('fa-times')) {
        hideMenu()
        //Para mostrar el back up
        arrow_scroll.fadeIn(1000)
        //Para bloquear el scroll de la pagina
        $('html, body').css({
            'overflow': 'visible',
            'height': 'auto'
        })
    }
})
//Fin de eventos ===================================

//Inicio de efectos de back up =====================

$(document).scroll(function () {

    let x = $(document).scrollTop();

    if (x !== 0) {
        arrow_scroll.fadeIn('slow')

    } else {
        arrow_scroll.fadeOut('slow')
    }
})

//Funcionamiento de la flecha para hacer scroll
arrow_scroll.click(() => {
    $('html, body').animate({ scrollTop: 0 }, 900)
})
//Fin de efectos de back up ========================