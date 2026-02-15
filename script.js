document.addEventListener('DOMContentLoaded', () => {

  const track = document.querySelector('.slider-track');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  const cards = document.querySelectorAll('.pet-card');

  const visibleCards = 3;                  // сколько видно одновременно
  const gap = 30;
  const cardWidth = cards[0].offsetWidth + gap;

  let position = 0;
  const maxPosition = -(cardWidth * (cards.length - visibleCards));

  nextBtn.addEventListener('click', () => {
    if (position > maxPosition) {
      position -= cardWidth;
      track.style.transform = `translateX(${position}px)`;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (position < 0) {
      position += cardWidth;
      track.style.transform = `translateX(${position}px)`;
    }
  });
});
