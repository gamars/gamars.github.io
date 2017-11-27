function draw(lang){

  $('#outer-frame.'+lang).height($('#outer-frame-ref.'+lang).height());
  $('#ceremony-frame.'+lang).height($('#ceremony-ref.'+lang).height());
  $('#map.'+lang).height($('#map-ref.'+lang).height());
  $('#map2.'+lang).height($('#map2-ref.'+lang).height());

  $('h4.lang').css({'padding-top':  $(window).height()-54+'px'})

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
}

$(document).ready(function(){

  Pace.on('done',function(){
    $('.pace').hide();
    $('#splash').height($(window).height());
    $('.home-image').fadeIn();
    draw(null);
  });

  $('a#lfr').click(function(){
    $('div#de').css("display","none");
    $('div#fr').css("display","block");
    draw("fr");
  });

  $('a#lde').click(function(){
    $('div#fr').css("display","none");
    $('div#de').css("display","block");
    draw("de");
  });
});
