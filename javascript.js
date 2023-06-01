const containerEl = document.querySelector(".container");

for (let index = 0; index < 32; index++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const randomColor = () => {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNum, randomNum + 1);
  }
  return colorCode;
};

const colorContainerEls = document.querySelectorAll(".color-container");

const generateColors = () => {
  colorContainerEls.forEach((el) => {
    const newColor = randomColor();
    el.style.backgroundColor = "#" + newColor;
    el.innerText = "#" + newColor;
  });
};

generateColors();
