/*! Ricky Mendez modalvideo.js v1.0.1 isabela2020.com | Copyright 2019 Efrain J. Valentin Gonzalez | efrainvalentin.github.io */
$(document).ready(function() {

    // Gets the video src from the data-src on each button

    var $videoSrc;
    $('.video-btn').click(function() {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);



    // when the modal is opened autoplay it  
    $('#videoModal').on('shown.bs.modal', function(e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })



    // stop playing the youtube video when close the modal
    $('#videoModal').on('hide.bs.modal', function(e) {
        $("#video").attr('src', $videoSrc);
    })




    // document ready  
});