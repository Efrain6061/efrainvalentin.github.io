/*! Ricky Mendez preloader.js v1.0.1 isabela2020.com | Copyright 2019 Efrain J. Valentin Gonzalez | efrainvalentin.github.io */
$(document).ready(function($) {
    var Body = $('body');
    Body.css('overflow', "hidden");
});
$(window).on("load", function() {
    // Things that need to happen after full load
    $('#preloader').fadeOut();
    var Body = $('body');
    Body.css('overflow', "auto");
});