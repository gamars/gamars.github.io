$(document).ready(function(){
  
  Pace.on('done',function(){
    
    $('#splash').height($(window).height())
    $('acrticle').show(1000)
    $('#outer-frame').height($('#outer-frame-ref').height())
    $('#ceremony-frame').height($('#ceremony-ref').height())
    $('#map').height($('#map-ref').height())
  
    $('.parallax-window').each(function() {
      var off = $(this).offset().top
      $(this).data('orig-offset', off);
    });
    
    $(window).on("scroll", function(){
      var scrollTop = $(window).scrollTop();
      var viewportHeight = $(window).height()
      
      $('.parallax-window').each(function(){
        var top = $(this).offset().top
        var bottom = $(this).offset().top+$(this).height()
        
        //Element is in viewport. translate
        if(top <= viewportHeight && bottom >=0){
          var off = $(this).data('orig-offset');
          var translate =  (scrollTop - off) / $(window).height() * 220;
          $(this).css({transform: 'translateY(' + translate +'px)'});
        }
      });
    });
  });
});
