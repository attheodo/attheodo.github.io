'use strict';

$(document).ready(function() {
    $('.dc-affix').affix({
        offset: {
            top: function() {
                return $('.navbar-static-top').height();
            }
        }
    });
    $('.quantity-subtract').click(function() {
        var quantityElem = $(this).next();
        var quantity = parseInt(quantityElem.html());
        if (quantity > 0)
            quantityElem.html(--quantity);
    });
    $('.quantity-add').click(function() {
        var quantityElem = $(this).prev();
        var quantity = parseInt(quantityElem.html());
        quantityElem.html(++quantity);
    });
    $('.account #address a').click(function() {
        $(this).find('.caret').toggleClass('inversed');
    });
});
