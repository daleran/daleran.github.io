$(function swapBackgrounds() {
  setTimeout(function(){
    $('#podcasts').toggleClass('active');
    swapBackgrounds();
  },3000);
});
