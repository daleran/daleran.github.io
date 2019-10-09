$(function () {
  let courses = $('.course');
  courses.slice(3,courses.length+1).hide();
  $("#loadMoreCourses").on('click', function (e) {
      e.preventDefault();
      if ($(".course:hidden").length === 0) {
        let coursesNew = $('.course');
        coursesNew.slice(3,coursesNew.length+1).slideUp();
        $("#loadMoreCourses").text('Show More');
      } else {
        $(".course:hidden").slideDown();
        $("#loadMoreCourses").text('Show Less');
      }
  });
});