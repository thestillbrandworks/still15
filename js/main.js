// only start parallaxin' a background if you can see it
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

// fade in the video player
function playerInView(){
  
  var $playButton = $('.play-button'),
      scrollPosition = $(window).scrollTop(),
      windowHeight = $(window).height();
      
  if (windowHeight + scrollPosition >= $playButton.offset().top) {
    $playButton.css('opacity', 1);
  }
}

// keep the height of the section so that the video doesn't letterbox
function reelHeight(){
  if (!$('.demo-reel .slide-contents').hasClass('reel-playing')) {    
      $('.demo-reel').css('height', $('.demo-reel').height());
  } else {
    $('.demo-reel').css('height', $('.player').height());

  }

}

function videoInteraction(){
  $('.play-button').on('click', function(e) {
    
    e.preventDefault();
    
    $('.demo-reel .slide-contents').addClass('reel-playing').fadeOut("slow");
    $('.player').addClass('reel-playing').fadeIn("slow");
    $('.demo-reel').css('height', $('.player').height());
    
    
    var iframe = $('#video-player')[0];
    // $f == froogaloop
    var player = $f(iframe);
     player.api('play');
  });
}








$(document).ready(function(){

      
      
  $(".player").fitVids();
  
  
  
  reelHeight();
  videoInteraction();
  

  
  
})


$(document).scroll(function(){
  
  playerInView();
  slideInView();

});


$(window).resize(function(){
  reelHeight();
})



// 
// function highlightFade() {
//  
//  if ($(document).scrollTop() > (($(window).height()) - 750 )) {
//    var constantThing = ($(document).scrollTop() - $('#homepage-events').offset().top)/-630;
//    $('#highlights').css('opacity', constantThing);
//    
//    console.log("constantThing: ", constantThing);
//    
//  };
//  
//  if ($(document).scrollTop() < (($(window).height()) - 750 )){
//    $('#highlights').css('opacity', 1);
//  }
// }