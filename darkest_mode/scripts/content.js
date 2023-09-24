const body = document.querySelector("body");

const darkness = document.createElement("div");
darkness.className = "darknessoverlay";
body.appendChild(darkness);

darkness.style = "--light-position-y: 0; --light-position-x: 0";

const offset = 2900;

document.documentElement.addEventListener(
  "mousemove",
  function handleMouseMove(event) {
    darkness.style.setProperty(
      "--light-position-y",
      event.clientY - offset + "px"
    );
    darkness.style.setProperty(
      "--light-position-x",
      event.clientX - offset + "px"
    );
  }
);

window.onscroll = function (e) {
  var vertical_position = 0;
  if (document.documentElement.clientHeight)
    //ie
    vertical_position = document.documentElement.scrollTop;
  else if (document.body)
    //ie quirks
    vertical_position = document.body.scrollTop;

  darkness.style.top = vertical_position + darkness.style.height + "px";
};
