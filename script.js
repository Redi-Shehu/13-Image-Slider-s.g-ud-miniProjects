const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const imgContainer = document.querySelector(".img-container");
const imgs = imgContainer.querySelectorAll("img");
console.log(imgs);

let currentImg = 1;

next.addEventListener("click", (e) => {
  currentImg++;
  updateImg();
  resetInterval();
});
prev.addEventListener("click", (e) => {
  currentImg--;
  updateImg();
  resetInterval();
});

function updateImg() {
  if (currentImg > imgs.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgs.length;
  }

  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 100}%)`;
}

let interval = setInterval(() => {
  currentImg++;
  updateImg();
}, 4000);
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    currentImg++;
    updateImg();
  }, 4000);
}

imgContainer.addEventListener("mouseenter", () => clearInterval(interval));
imgContainer.addEventListener("mouseleave", resetInterval);
