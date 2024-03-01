const slides = document.querySelectorAll('.hero__slider-view');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');
const paginationButtons = document.querySelectorAll('.hero__page');

let currentSlide = 0;

// Отключает кнопки в начальной позиции
buttonPrev.disabled = true;

// показать слайд
const showSlide = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('hero__slider-view');
      paginationButtons[index].classList.add('hero__page--active');
    } else {
      slide.classList.remove('hero__slider-view--active');
      paginationButtons[index].classList.remove('hero__page--active');
    }
  });

  // активировать или дезактивировать кнопки в зависимости от текущего слайда
  if (currentSlide === 0) {
    buttonPrev.disabled = true;
  } else {
    buttonPrev.disabled = false;
  }

  if (currentSlide === slides.length - 1) {
    buttonNext.disabled = true;
  } else {
    buttonNext.disabled = false;
  }
};

const onNextButtonClick = () => {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide();
  }
};

const onPrevButtonClick = () => {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide();
  }
};

const onPaginationButtonClick = (index) => {
  currentSlide = index;
  showSlide();
};

buttonNext.addEventListener('click', onNextButtonClick);
buttonPrev.addEventListener('click', onPrevButtonClick);

paginationButtons.forEach((button, index) => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    onPaginationButtonClick(index);
  });
});

export { showSlide };
