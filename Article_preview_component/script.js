let shareImage = document.querySelector(".right_image");
let share = document.querySelector(".share");
let box = document.querySelector(".box");

// console.log(share.style.opacity);
shareImage.addEventListener("click", () => {
  if (share.style.opacity == 0 && box.style.opacity == 0) {
    share.style.opacity = 1;
    box.style.opacity = 1;
  } else {
    share.style.opacity = 0;
    box.style.opacity = 0;
  }
});
