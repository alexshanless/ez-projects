const button = document.getElementById("btn");
const boxes = document.getElementById("boxes");

button.addEventListener("click", () => {
  if (boxes.classList.contains("big")) {
    boxes.classList.remove("big");
  } else {
    boxes.classList.add("big");
  }
});
