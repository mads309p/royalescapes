const arrowButton = document.querySelector(".arrow-button");

arrowButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
