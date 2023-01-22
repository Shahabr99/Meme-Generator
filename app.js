const form = document.querySelector(".meme-form");
const URL = document.querySelector("#URL");
const upText = document.querySelector("#upperText");
const downText = document.querySelector("#lowerText");
const memeContainer = document.querySelector(".meme-box");
const closeMeme = document.querySelector(".close-btn");

//Creating meme
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let imgURL = URL.value;

  const image = document.createElement("div");
  image.setAttribute("class", "meme-image");
  image.style.backgroundImage = "url(" + imgURL + ")";

  console.log(image);
  memeContainer.insertAdjacentElement("beforeend", image);

  const firstText = document.createElement("p");
  firstText.classList.add("p-1");
  firstText.innerText = upText.value;
  image.append(firstText);

  const secondText = document.createElement("p");
  secondText.classList.add("p-2");
  secondText.innerText = downText.value;
  image.append(secondText);

  const closeBtn = document.createElement("div");
  closeBtn.innerHTML =
    '<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>';
  closeBtn.classList.add("close-btn");
  image.append(closeBtn);

  closeBtn.addEventListener("click", function (e) {
    e.target.closest(".meme-image").remove();
  });
  form.reset();
});
