
(function ($) {
	"use strict";
   $(document).ready(function($){

    // tooltip
    $('[data-toggle="tooltip"]').tooltip()

			 // Sticky Menu
			$('.js--sticky-menu').waypoint(function(direction){
			   if(direction == 'down'){
			         $('.header-area').addClass('sticky');
			      } else {
			         $('.header-area').removeClass('sticky');
			   }
            });
            // Active Menu Color
            $('.main-menu li').on('click', function(){
                $('.main-menu li').removeClass('active');
                $(this).addClass('active');
            });



            // Search Trigger
            $('.search-trigger').on('click', function(){
                $('#search-modal').addClass('show');
                $('.search-overlay').addClass('show');
            });
            $('.search-overlay').on('click', function(){
                $(this).removeClass('show');
                $('#search-modal').removeClass('show');
            });
            // Search Trigger


       // Start Slick Nav
   $('#mobile-menu').slicknav({
    prependTo: '.show-mobile-menu',
    allowParentLinks: true
 });
 // End Slick Nav

//  Scroll Up
$.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
//   Scroll Up

//   Magnific Popup
$(".video-play").magnificPopup({
    type: 'iframe',
});
//   End  Magnific Popup

// Smooth Scroll for IE/ EDGE/ SAFARI
$('a').on('click', function(event){
    if (this.hash !==''){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            window.location.hash = hash;
        });
    }
});
// End Smooth Scroll for IE/ EDGE/ SAFARI

});

})(jQuery);
