const arrowButton = document.querySelector(".arrow-button");

arrowButton.addEventListener("click", () => {
  window.scrollTo({
    top: 900,
    behavior: "smooth",
  });
});
