$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  $('.anim-trigger').each(function() {
    const thisElem = $(this);
    if (thisElem.isInViewport()) {
      var anims = $(this).find('.anim-elem').addClass('triggered');
      thisElem.removeClass('anim-trigger');
    }
  });
});