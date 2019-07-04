/*! Ricky Mendez navbar.js v1.0.1 isabela2020.com | Copyright 2019 Efrain J. Valentin Gonzalez | efrainvalentin.github.io */
$(document).ready(function() {

    var toggleAffix = function(affixElement, scrollElement, wrapper) {

        var height = affixElement.outerHeight(),
            top = wrapper.offset().top;

        if (scrollElement.scrollTop() >= top) {
            wrapper.height(height);
            affixElement.addClass("affix");
            $(".navbar").css("padding-bottom", "0.5em")
        } else {
            affixElement.removeClass("affix");
            $(".navbar").css("padding-bottom", "0")
            wrapper.height('auto');
        }

    };

    $('[data-toggle="affix"]').each(function() {
        var ele = $(this),
            wrapper = $('<div></div>');

        ele.before(wrapper);
        $(window).on('scroll resize', function() {
            toggleAffix(ele, $(this), wrapper);
        });

        // init
        toggleAffix(ele, $(window), wrapper);
    });

});