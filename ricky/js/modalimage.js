$(document).ready(function() {

// Gets the image src from the data-src on each button

var $imageSrc;  
$('.galeria-a').click(function() {
    $imageSrc = $(this).data( "src" );
});
console.log($imageSrc);

  
  
// when the modal is opened autoplay it  
$('#galeriaModal').on('shown.bs.modal', function (e) {
    
$("#image").attr('src',$imageSrc); 
})
  


// stop playing the youtube image when I close the modal
$('#galeriaModal').on('hide.bs.modal', function (e) {
    // a poor man's stop image
    $("#image").attr('src',""); 
}) 
    
    


  
  
// document ready  
});


