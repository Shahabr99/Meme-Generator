const form = document.querySelector(".meme-form");
const URL = document.querySelector("#URL");
const upText = document.querySelector("#upperText");
const downText = document.querySelector("#lowerText");
const memeContainer = document.querySelector(".meme-box");

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
  form.reset();
});
