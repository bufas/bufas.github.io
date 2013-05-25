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
	 
	 $('.picker').colorpicker({ colorFormat: '#HEX', draggable: false, select: newcolor });
	 
	 $('.bgchang').click(function(){
		 $('body').css('background-image','url('+$(this).attr('src')+')');
	 });
});



// Change colors
function newcolor(color) {
	color = $('#picker').val();
 	from = $(".navi").css("background-color");
	$('*').filter(function(i){ return $(this).css("background-color") == from; }).css("background-color", color);
	$('*').filter(function(i){ return $(this).css("border-color") == from; }).css("border-color", color);
	$('*').filter(function(i){ return $(this).css("border-top-color") == from; }).css("border-top-color", color);
	$('*').filter(function(i){ return $(this).css("border-bottom-color") == from; }).css("border-bottom-color", color);
	$('*').filter(function(i){ return $(this).css("color") == from; }).css("color", color);
	$('.tooltipster-default').css('background-color', color);
	$('.resume-large-icon').remove();
}
