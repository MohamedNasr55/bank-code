$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    margin: 30,
    loop: true,
    nav: true,
    loop: true,
    dots: false,
    autoplay: true,
    navText: [
      `<i class="btn fa-solid fa-arrow-left-long"></i>`,
      `<i class="btn fa-solid fa-arrow-right-long"></i>`,
    ],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});
////////////////////////////////////////////
///// start code button top ///////////////
//////////////////////////////////////////
let arrowUp = document.getElementById("arrow-up");

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > 300) {
    arrowUp.style.opacity = "1";
  } else {
    arrowUp.style.opacity = "0";
  }
});

//////////////////////////////////////////
///// end code button top ///////////////
////////////////////////////////////////

//////////////////////////////////////////
///// start canvas code   ///////////////
////////////////////////////////////////
var canvas = document.getElementById("box");
var ctx = canvas.getContext("2d");
var radius = 75;
var endPercent = 80;
var CurPer = 0;
var circ = Math.PI * 2;
var quart = Math.PI / 2;

ctx.lineWidth = "10";
ctx.strokeStyle = "blue";
ctx.shaowoffsetX = 0;
ctx.shaowoffsetY = 0;
ctx.shadowBlur = 1;
ctx.shadowColor = "#656565";

function draw(currentPerc) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc('250', '250', radius, -quart, (circ * currentPerc)-quart, false);
  ctx.stroke();

  CurPer++;
  if (CurPer < endPercent) {
    requestAnimationFrame(function () {
      draw(CurPer / 100);
    });
  }
}
draw();
//////////////////////////////////////////
///// end canvas code   ///////////////
////////////////////////////////////////
