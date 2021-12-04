$(document).ready(function () {
    var image = document.getElementsByClassName('parallax');
    console.log(image)
    paralax = new simpleParallax(image, {
        delay: 0,
        scale: 1.1,
        overflow: true,
        orientation: 'down',
     });



     Fancybox.bind("a[data-fancybox]", {
        autoFocus: false,
        trapFocus: false
    });

    $('.dropdown').on("mouseenter", function(){ 
      $('.dropdown-toggle', this).trigger('click'); 
    });

    $('.dropdown').on("mouseleave", function(){ 
      $('.dropdown-toggle', this).trigger('click'); 
    });
})