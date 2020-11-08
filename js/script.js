function generateRandomColor() {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    let colorNum = Math.floor(Math.random() * 255 + 1);
    rgb.push(colorNum);
  }
  rgbColor = "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
  document.body.style.backgroundColor = rgbColor;
}

function showBoxSide(e) {
  let element = e.currentTarget;
  let id = element.id;
  let newSide, animationName, altAnimationName;
  switch (id) {
    case "arrow_left":
      animationName = "rotateLeftOut";
      altAnimationName = "rotateRightIn";
      newSide = document.getElementById("sides");
      break;
    case "arrow_right":
      animationName = "rotateRightOut";
      altAnimationName = "rotateLeftIn";
      newSide = document.getElementById("sides");
      break;
    case "arrow_up":
      animationName = "rotateRightOut";
      altAnimationName = "rotateLeftIn";
      newSide = document.getElementById("top");
      break;
    case "arrow_down":
      animationName = "rotateRightOut";
      altAnimationName = "rotateLeftIn";
      newSide = document.getElementById("bottom");
      break;
  }
  let current = document.querySelector(".box_side.active");
  current.style.animationName = animationName;
  setTimeout(function() {
    current.classList.remove("active");
    newSide.classList.add("active");
    current.style.animationName = altAnimationName;
    generateRandomColor();
  }, 1000);
}

window.onload = function () {
  generateRandomColor();

  document.getElementById("arrow_left").addEventListener("click", showBoxSide, false);
  document.getElementById("arrow_right").addEventListener("click", showBoxSide, false);
  document.getElementById("arrow_up").addEventListener("click", showBoxSide, false);
  document.getElementById("arrow_down").addEventListener("click", showBoxSide, false);
};
