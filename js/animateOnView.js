$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

var scrollTimer, lastScrollFireTime = 0;

$(window).on('resize scroll', function() {
  
  var minScrollTime = 100;
  var now = new Date().getTime();

  function processScroll() {
      $('.anim-trigger').each(function() {
        const thisElem = $(this);
        if (thisElem.isInViewport()) {
          var anims = $(this).find('.anim-elem').addClass('triggered');
          thisElem.removeClass('anim-trigger');
        }
      });

      if ($(window).scrollTop() > 300) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
  }

  if (!scrollTimer) {
      if (now - lastScrollFireTime > (3 * minScrollTime)) {
          processScroll();   // fire immediately on first scroll
          lastScrollFireTime = now;
      }
      scrollTimer = setTimeout(function() {
          scrollTimer = null;
          lastScrollFireTime = new Date().getTime();
          processScroll();
      }, minScrollTime);
  }
});