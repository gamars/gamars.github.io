$(document).ready(function(){
  
  Pace.on('done',function(){
    $('#splash').height($(window).height())

    $('.home-image').fadeIn()
    $('#outer-frame').height($('#outer-frame-ref').height())
    $('#ceremony-frame').height($('#ceremony-ref').height())
    $('#map').height($('#map-ref').height())
  
    
    $(window).on("scroll", function(){
      var scrollTop = $(window).scrollTop();
      var translate =  scrollTop / $(window).height() * 220;
      $('.parallax-window').each(function(){
          $(this).css({transform: 'translateY(' + translate +'px)'});
      });
    });
  });
});
