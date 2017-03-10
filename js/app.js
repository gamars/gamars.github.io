$(document).ready(function(){
  
  $('#viewport').scrollbar();
  $('#splash').height($('#viewport').height())
  $('#outer-frame').height($('#outer-frame-ref').height())
  
  invite
  
  $('.parallax-window').each(function() {
    var off = $(this).offset().top
    $(this).data('orig-offset', off);
  });
  
  $('#viewport').not('.scroll-wrapper').on("scroll", function(){  
    var scrollTop = $('#viewport').scrollTop();
    $('.parallax-window').each(function(){
      var off = $(this).data('orig-offset');
      if (scrollTop >= off) {
        var translate =  (scrollTop - off) / $(window).height() * 220;
        $(this).css({transform: 'translateY(' + translate +'px)'});
      }
    });
  });
});
