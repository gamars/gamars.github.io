$(document).ready(function(){
    
  
  
  Pace.on('done',function(){
    $('#splash').height($(window).height())
    $('.home-image').fadeIn()
    $('#outer-frame').height($('#outer-frame-ref').height())
    $('#ceremony-frame').height($('#ceremony-ref').height())
    $('#map').height($('#map-ref').height())
  
    $('.parallax-window').each(function() {
      var off = $(this).offset().top
      $(this).data('orig-offset', off);
    });
    
    $(window).on("scroll", function(){
      var scrollTop = $(window).scrollTop();
      $('.parallax-window').each(function(){
          var off = $(this).data('orig-offset');
          var translate =  (scrollTop - off) / $(window).height() * 220;
          $(this).css({transform: 'translateY(' + translate +'px)'});
      });
    });
  });
});
