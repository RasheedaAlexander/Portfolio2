$(document).ready(function(){
  //Show/Hide about div while scrolling
  $(window).scroll(function() {

    if ($(this).scrollTop()>0)
    {
      $('#about-txt').fadeIn("slow");
    }
    else
    {
      $('#about-txt').fadeOut("slow");
    }
  });
})
