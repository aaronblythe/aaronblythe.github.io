$(document).ready(function(){


	$("#portfolio-content-active").mixItUp();


	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 1500,      
	    singleItem:true,
	    autoPlay: 6000,
	});




	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});