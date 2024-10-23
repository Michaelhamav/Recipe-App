let images = document.querySelectorAll('.slider img');
let currentIndex = 0;

function autoSlide() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
  setTimeout(autoSlide, 3000);
}
autoSlide();

let scrollRevealElements = document.querySelectorAll('.content');

window.addEventListener('scroll', () => {
  scrollRevealElements.forEach((element) => {
    let elementTop = element.offsetTop;
    let scrollPosition = window.scrollY;
    if (scrollPosition > elementTop - window.innerHeight / 1.5) {
      element.classList.add('visible');
    }
  });
});