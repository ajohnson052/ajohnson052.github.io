$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).width() > 400){
      if ($(window).scrollTop() <= $("#home").height()){
        $("nav").css("position", "relative")
      }
      else{
        $("nav").css("position", "fixed")
      }
    }
  })
  var descriptors = ["Web Developer", "Nature Enthusiast", "Economist", "Rock Climber", "Thinker", "Beer Lover", "Singer", "Biker", "Marathon Runner", "Tree Hugger", "Dancer", "Health Nut", "Yogini", "Traveler", "Rubyist", "Musician"]
  d3.select("#section1")
    .select(".content")
    .selectAll("h2")
    .data(descriptors)
    .enter()
    .append("h2")
    .text(function(d){
      if(d === descriptors[descriptors.length - 1]){
        return d;
      }else{
        return d + " | ";
      }
    })
    .style("display", "inline")
    .style("color", function(){
      var r = Math.floor(Math.random()*250)
      var g = Math.floor(Math.random()*250)
      var b = Math.floor(Math.random()*250)

      return "rgb("+ r + "," + g + "," + b + ")";
    })

})
