$(function swapBackgrounds() {
  setTimeout(function(){
    $('#podcasts').toggleClass('active');
    swapBackgrounds();
  },2000);
});
