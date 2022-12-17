const images = ["1.jpeg", "2.webp", "3.webp"];
const slider = document.querySelector(".slider");

slider.innerHTML += images
  .map((img) => {
    return `
      <img src="./images/${img}">
    `;
  })
  .join("");

const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");
let slideCounter = 0;

rightArrow.addEventListener("click", () => {
  slideCounter++;
  if (slideCounter === 3) slideCounter = 0;
  slider.style.transform = `translateX(${slideCounter * -1600}px)`;
});

leftArrow.addEventListener("click", () => {
  slideCounter--;
  if (slideCounter < 0) slideCounter = 2;
  slider.style.transform = `translateX(${slideCounter * -1600}px)`;
});
