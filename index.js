const articles = document.querySelectorAll(".article");

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
