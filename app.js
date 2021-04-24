const colors=["red" , "green","gray" , "#f15025" ,"rgba(133,122,200)","cyan","cornsilk","blue","lightblue","cornflowerblue"];
const color = document.querySelector(".color");
var btn = document.querySelector("button");
btn.addEventListener("click", function(){
  var random = Math.floor(Math.random()*colors.length);
  document.body.style.backgroundColor = colors[random];
  color.textContent = colors[random];

});
