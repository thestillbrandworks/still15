// check if item is on screen


function slideInView(){
  
  var $slide = $('.parallax'),
      scrollPosition = $(window).scrollTop(),
      windowHeight = $(window).height();
      
  $slide.each(function( index ) {
    var slideId = $(this).attr('id');
    
    if (windowHeight + scrollPosition >= $('#'+ slideId).offset().top) {
      var parallaxFactor = $('#'+ slideId).offset().top - (scrollPosition + windowHeight);
      
      $('.' + slideId +'-bg').css('top', (parallaxFactor*0.1)+'px')
    }
  });
}


function playerInView(){
  
  var $playButton = $('.parallax'),
      scrollPosition = $(window).scrollTop(),
      windowHeight = $(window).height();
      
  $slide.each(function( index ) {
    var slideId = $(this).attr('id');
    
    if (windowHeight + scrollPosition >= $('#'+ slideId).offset().top) {
      var parallaxFactor = $('#'+ slideId).offset().top - (scrollPosition + windowHeight);
      
      $('.' + slideId +'-bg').css('top', (parallaxFactor*0.1)+'px')
    }
  });
}





$(document).scroll(function(){
  
  
	if ($(window).width() > 700){
	    slideInView();
	}
 
});