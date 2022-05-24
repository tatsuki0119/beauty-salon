'use strict';

// ハンバーガーメニュー
{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const menu1 = document.getElementById('menu1');
  const menu2 = document.getElementById('menu2');
  const menu3 = document.getElementById('menu3');
  const menu4 = document.getElementById('menu4');
  const menu5 = document.getElementById('menu5');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu1.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu2.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu3.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu4.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  menu5.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}


// カルーセル
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const pics = document.getElementById('pics');
  const slides = pics.children;
  const dots = [];
  let currentIndex = 0;

  function updateButtons() {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');

    if (currentIndex === 0) {
      prev.classList.add('hidden');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    pics.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.getElementById('navs').appendChild(button);
    }

    dots[0].classList.add('current');
  }

  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();
  
  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    moveSlides();
    updateDots();
  });
  
  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    moveSlides();
    updateDots();
  });
  
  window.addEventListener('resize', () => {
    moveSlides();
  });
}