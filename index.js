const articles = document.querySelectorAll(".article");
const search = document.querySelector(".search");
const input = document.querySelector(".input");

let searchLoc = search.getBoundingClientRect();
input.style["right"] = window.innerWidth - searchLoc.right - 15 + "px";

window.addEventListener("resize", e => {
  searchLoc = search.getBoundingClientRect();
  input.style["right"] = window.innerWidth - searchLoc.right - 15 + "px";
});

search.addEventListener("click", e => {
  e.preventDefault();
  const link = search.querySelector("a");
  const input = search.querySelector("input");

  if (input.classList.contains("show")) {
    return;
  }

  input.classList.add("show");
  link.classList.add("hide");

  input.addEventListener("transitionend", e => {
    input.focus();
  });

  input.addEventListener("blur", e => {
    input.classList.remove("show");
    link.classList.remove("hide");
  });
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
