$(function swapBackgrounds() {
  setTimeout(function(){
    $('#podcasts').toggleClass('active');
    swapBackgrounds();
  },5000);
});
