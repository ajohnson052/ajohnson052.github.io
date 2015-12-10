$(document).ready(function(){
  $(window).scroll(function(){
    console.log($(window).scrollTop())
    if ($(window).scrollTop() <= $("#home").height()){
      console.log('top')
      $("nav").css("position", "relative")
    }
    else{
      $("nav").css("position", "fixed")
    }
  })
})
