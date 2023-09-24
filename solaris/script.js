const can = document.getElementById("circle-canvas");
const ctx = can.getContext("2d");

const circleSize = 100;
const sepia = `rgb(228, 211, 162)`;
const cx = circleSize;
const cy = circleSize;

can.width = 400;
can.height = 400;
ctx.strokeStyle = sepia;
ctx.scale(2, 2);
// in case you like using degrees
function toRadians(deg) {
  return (deg * Math.PI) / 180;
}

for (let i = 0; i < 360; i += 2) {
  for (let j = 0; j < circleSize; j += 2) {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, circleSize - j, toRadians(180), toRadians(182 + i));
    ctx.lineTo(cx, cy);
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
}

for (let i = 0; i < 360; i += 10) {
  for (let j = 0; j < circleSize; j += 20) {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, circleSize - j, toRadians(180), toRadians(190 + i));
    ctx.lineTo(cx, cy);
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}
