
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});










var circle = $('.button');

circle.on('click', function(){
    circle.removeClass('active');
    $(this).addClass('active');
});




( function( $ ) {
	
	// Setup variables
	$window = $(window)
	$slide = $('.homeSlide');
	$body = $('body');
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    
	    // Refresh Skrollr after resizing our sections
	    
	    
	}
		
} )( jQuery );




$(document).ready(function(){
		$('section').waypoint(function(direction) {
			$(this).addClass('active');
		  thisId = $(this).attr('id');
		  $('.nav a').each(function(){
		    var secondaryID = $(this).attr('class');
		    if  ( secondaryID == thisId )
		        {
		        	$('.nav a .button').removeClass('active');
		            $(this).find('.button').addClass('active');
		        }
			});
	},{offset: '0'});	
});	
