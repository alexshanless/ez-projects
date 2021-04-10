const button = document.getElementById("btn");
const boxesContainer = document.getElementById("boxes");

button.addEventListener("click", () => {
  if (boxesContainer.classList.contains("big")) {
    boxes.classList.remove("big");
  } else {
    boxesContainer.classList.add("big");
  }
});

function createBoxes() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxesContainer.appendChild(box);
    }
  }
}
createBoxes();
