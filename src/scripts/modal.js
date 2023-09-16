'use strict'

//Inicio de modal uno =====================
let locationCont = $('.wrap-modal--location')
$('.close-click').click(() =>locationCont.addClass('close'))
$('#open-location, #open-location--phone').click(() =>locationCont.removeClass('close'))
//Fin de modal uno ========================

//Inicio de modal dos =====================
let mailCont = $('.wrap-modal--mail')
$('.close-click').click(() =>mailCont.addClass('close'))
$('#open-mail, #open-mail--phone').click(() =>mailCont.removeClass('close'))
//Fin de modal dos ========================

//Inicio de modal tres =====================
let phoneCont = $('.wrap-modal--phone')
$('.close-click').click(() =>phoneCont.addClass('close'))
$('#open-phone, #open-phone--phone').click(() =>phoneCont.removeClass('close'))
//Fin de modal tres ========================

