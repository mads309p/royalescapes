const images = document.querySelectorAll(".scroll-image, .scroll-image2, .scroll-image3, .scroll-image4");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  images.forEach((image) => {
    if (scrollPosition > 900) {
      /* change this value to adjust the scroll position */
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
  });
});
