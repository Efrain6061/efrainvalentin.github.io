/*! Ricky Mendez modalimage.js v1.0.1 isabela2020.com | Copyright 2019 Efrain J. Valentin Gonzalez | efrainvalentin.github.io */
$(document).ready(function() {

    // Gets the image src from the data-src on each link

    var $imageSrc;
    $('.galeria-a').click(function() {
        $imageSrc = $(this).data("src");
    });
    console.log($imageSrc);



    // when the modal is opened load image  
    $('#galeriaModal').on('shown.bs.modal', function(e) {

        $("#image").attr('src', $imageSrc);
    })



    // remove image when close the modal
    $('#galeriaModal').on('hide.bs.modal', function(e) {
        $("#image").attr('src', "");
    })




    // document ready  
});