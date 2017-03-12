$(document).ready(function(){
  
  Pace.on('done',function(){
    $('#splash').height($(window).height());
    $('.home-image').fadeIn();
    $('#outer-frame').height($('#outer-frame-ref').height());
    $('#ceremony-frame').height($('#ceremony-ref').height());
    $('#map').height($('#map-ref').height());
  
    $(window).on("scroll", function(event){
      var scrollTop = $(window).scrollTop();
      $('.parallax-window').each(function(){
        var delta = (scrollTop-($(this).offset().top)) * 0.2
        $(this).css({transform: 'translateY(' + delta +'px)'});    
      });
    });
  });
});
