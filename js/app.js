$(document).ready(function(){
  
  Pace.on('done',function(){
    $('#splash').height($(window).height());
    $('.home-image').fadeIn();
    $('#outer-frame').height($('#outer-frame-ref').height());
    $('#ceremony-frame').height($('#ceremony-ref').height());
    $('#map').height($('#map-ref').height());
  
    $(window).on("scroll", function(event){
      var scrollTop = $(window).scrollTop();

      var head = Math.floor(scrollTop * 0.45)
      $('.head').css({'padding-top': head+'px'})    
      
      
      $('.parallax-window').each(function(){
        var speed = $(this).attr('data-speed');
        var delta = (scrollTop-($(this).offset().top)) * speed
        $(this).css({transform: 'translateY(' + delta +'px)'});    
      });
    });
  });
});
