const articles = document.querySelectorAll(".article");
const search = document.querySelector(".search");
const input = document.querySelector(".input");
const link = search.querySelector("a");

window.addEventListener("resize", e => {
  setInputPos();
});

search.addEventListener("click", e => {
  e.preventDefault();
  if (input.classList.contains("show")) {
    return;
  }

  input.classList.add("show");
  link.classList.add("hide");
});

input.addEventListener("transitionend", e => {
  input.focus();
});

input.addEventListener("blur", e => {
  input.classList.remove("show");
  link.classList.remove("hide");
});

articles.forEach(article => {
  article.addEventListener("mouseover", e => {
    article
      .querySelectorAll(".diggs a")
      .forEach(link => link.classList.add("underline"));
  });

  article.addEventListener("mouseout", e => {
    article
      .querySelectorAll(".diggs a")
      .forEach(link => link.classList.remove("underline"));
  });
});

function setInputPos() {
  let searchLoc = search.getBoundingClientRect();
  input.style["right"] = window.innerWidth - searchLoc.right + "px";
}
