$(document).ready(function() {

	// Smooth Scroll to internal links

	$(".scroll").click(function(event){		
			event.preventDefault();
			
			$scroll = $(this.hash).offset().top;
			$scroll = $scroll - 90;
			$('html,body').animate({scrollTop:$scroll}, 500);
		});

	
	// Turn scrolling events off for iOS devices
	var iOS = false,
    p = navigator.platform;

	if( p === 'iPad' || p === 'iPhone' || p === 'iPod' ){
		iOS = true;
	}
	
	//Tooltips Code:
	 $('.hasatip').tooltipster({
	 	delay: 0,
	 	speed: 100,
	 	touchDevices: false
	 });

});