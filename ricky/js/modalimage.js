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
        $("#loader").addClass("d-none");
        $("#image").attr('src', $imageSrc);
    })



    // remove image when close the modal
    $('#galeriaModal').on('hidden.bs.modal', function(e) {
        $("#loader").removeClass("d-none");
        $("#image").attr('src', "");
    })




    // document ready  
});