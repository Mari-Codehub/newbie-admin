let arrowDown = document.getElementById("arrowDown");
let arrowUp = document.getElementById("arrowUp");
let lectureMenu = document.getElementById("lectureMenu");

let menuVisible = false;

arrowDown.classList.remove("hide-icon");

arrowUp.addEventListener("click", function () {
  if (menuVisible) {
    arrowUp.classList.remove("hide-icon");
    arrowDown.classList.add("hide-icon");
    lectureMenu.style.display = "none";
    menuVisible = false;
  } else {
    arrowUp.classList.add("hide-icon");
    arrowDown.classList.remove("hide-icon");
    lectureMenu.style.display = "block";
    menuVisible = true;
  }
});

arrowDown.addEventListener("click", function () {
  if (menuVisible) {
    arrowDown.classList.add("hide-icon");
    arrowUp.classList.remove("hide-icon");
    lectureMenu.style.display = "none";
    menuVisible = false;
  } else {
    arrowDown.classList.remove("hide-icon");
    arrowUp.classList.add("hide-icon");
    lectureMenu.style.display = "block";
    menuVisible = true;
  }
});
