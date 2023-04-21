document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelector('.cards');
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const buffer = 50; // Adjust this value to change the buffer distance
      return (
        rect.top + buffer <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function showCardsOnScroll() {
      if (isElementInViewport(cards)) {
        cards.classList.add('show');
        window.removeEventListener('scroll', showCardsOnScroll);
      }
    }
  
    window.addEventListener('scroll', showCardsOnScroll);
  });