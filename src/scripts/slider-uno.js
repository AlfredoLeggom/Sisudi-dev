'use strict'


//Agregar la paginación dinamicamente
let imgPagination = $('.slide-elements li').length
let imgPosition = 1

for (let i = 0; i < imgPagination; i++) {
    $('.content-slider__pagination ol').append('<li> <i class="fas fa-circle"></i> </li>')

}

//Ocultar los slider y mostrar el primero
$('.slide-elements li').hide()
$('.slide-elements li:first').show()
$('.content-slider__pagination li:first i').css('color', 'rgba(233, 72, 34, 0.85)')//Darle estilo al primer elemento de la paginacion

//Ejecutar Funciones
$('.content-slider__pagination li').click(pagination)
$('.content-slider__rigth').click(nextSlider)
$('.content-slider__left').click(prevSlider)
//=============================================

//Ejecutar automaticamente el slider
let auto_slide = setInterval(()=>{
    nextSlider()
},3000)

//Funciones
function pagination(){
    let elementPosition= $(this).index() + 1;

    $('.slide-elements li').hide()
    $('.slide-elements li:nth-child(' + elementPosition + ')').fadeIn()
    $('.content-slider__pagination li i').css('color', 'rgba(194, 194, 194, 0.774)');
    $('.content-slider__pagination li:nth-child('+ elementPosition +') i').css('color', 'rgba(233, 72, 34, 0.85)')

    imgPosition = elementPosition
}

function nextSlider (){
    
    if(imgPosition < imgPagination ){
        imgPosition++
    }else{
        imgPosition = 1
    }
    
    $('.slide-elements li').hide()
    $('.slide-elements li:nth-child(' + imgPosition + ')').fadeIn()
    $('.content-slider__pagination li i').css('color', 'rgba(194, 194, 194, 0.774)');
    $('.content-slider__pagination li:nth-child('+ imgPosition +') i').css('color', 'rgba(233, 72, 34, 0.85)')
        
}

function prevSlider(){

    if(imgPosition === 1){
        imgPosition = imgPagination
    }else{
        imgPosition--
    }

    $('.slide-elements li').hide()
    $('.slide-elements li:nth-child(' + imgPosition + ')').fadeIn()
    $('.content-slider__pagination li i').css('color', 'rgba(194, 194, 194, 0.774)');
    $('.content-slider__pagination li:nth-child('+ imgPosition +') i').css('color', 'rgba(233, 72, 34, 0.85)')

}