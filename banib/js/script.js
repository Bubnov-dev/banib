$(document).ready(function () {
    var image = document.getElementsByClassName('parallax');
    console.log(image)
        
    
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


    //card.html

    
  $('.casual-slider').slick({
    centerMode: true,
    // centerPadding: '60px',
    arrows: true,
    centerMode: true,
    centerPadding: '25%',
    slidesToShow: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '40px',
        }
      },
    ]
  });
			
})