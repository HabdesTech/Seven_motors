$(document).ready(function () {
    //AGREGANDO CLASE ACTIVE
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');

    //AGREGANDO FUNCIONES CLICK
    $('.category_item').click(function () {
        var catProduct = $(this).attr('category');


        //AGREGNADO CLASE ACTIVE AL ENLACE SELECCIONADO
        $('.category_item').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');

        //OCULTANDO PRODUCTOS
        $('.products_item').hide();

        //MOSTRANDO PRODUCTOS

        $('.products_item[category="' + catProduct + '"]').show();
    });
   //MOSTRANDO TODOS   PRODUCTOS
    $('.category_item[category="all"]').click(function (){
        $('.products_item').show();
    })
});

