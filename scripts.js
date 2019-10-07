"use strict";

$.fn.isInViewport = function () {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function () {
  $('.anim-trigger').each(function () {
    var thisElem = $(this);

    if (thisElem.isInViewport()) {
      var anims = $(this).find('.anim-elem').addClass('triggered');
      thisElem.removeClass('anim-trigger');
    }
  });
});
$(document).ready(function () {
  $('.fellow-container').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [, {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
});
$(function () {
  var courses = $('.course');
  courses.slice(3, courses.length + 1).hide();
  $("#loadMoreCourses").on('click', function (e) {
    e.preventDefault();

    if ($(".course:hidden").length === 0) {
      var coursesNew = $('.course');
      coursesNew.slice(3, coursesNew.length + 1).slideUp();
      $("#loadMoreCourses").text('Show More');
    } else {
      $(".course:hidden").slideDown();
      $("#loadMoreCourses").text('Show Less');
    }
  });
});
$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Prevent default anchor click behavior
      event.preventDefault(); // Store hash

      var hash = this.hash; // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if

  });
});