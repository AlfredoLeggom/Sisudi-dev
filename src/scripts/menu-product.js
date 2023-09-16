$(document).ready(()=>{

        //Activar el menu en la categoria all
        $('.product__menu .category-menu[category="all"]').addClass('ct_item-activate')
        //________________________________________________________________________________
        
        //declaracion de variables
        const category_menu = $('.category-menu')
        const category_menu_all = $('.category-menu[category="all"]')
        const section_title = $('.product__section-title')
        const product_box = $('.product-box')
        const product__container = $('.product__container')
        //_________________________________________________________
        //Eventos
        category_menu.click(activate_menu)
        category_menu_all.click(activate_all)
        //____________________________________________________

        //Funciones
        function activate_menu(){
                let category = $(this).attr('category');
                //Agregar la clase active a la categoria seleccionada
                category_menu.removeClass('ct_item-activate')
                $(this).addClass('ct_item-activate')

                //Ocultar el contenido
                section_title.hide()
                product_box.hide()
                product__container.hide()

                //Mostrar contenido seleccionado
                $('.product__container[category="' + category + '"]').show()
                $('.product__section-title[category="' + category + '"]').fadeIn(500)
                $('.product-box[category="' + category + '"]').fadeIn(1000)

        }

        function activate_all(){

                //Mostrar contenido seleccionado
                $('.product__container').show()
                $('.product__section-title').fadeIn(500)
                $('.product-box').fadeIn(1000)
        }
})