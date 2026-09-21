"use strict";
import { WRAPPER, SLIDER, sliderLBtn, sliderRBtn } from "./consts.js";


sliderLBtn.classList.add('disabled-controls');
let position = 0;
let slideWidth = window.innerWidth > 768? SLIDER.offsetWidth - WRAPPER.offsetWidth + 164  : SLIDER.offsetWidth - WRAPPER.offsetWidth +16;
let numSteps = window.innerWidth > 768? 3 : 6;
let offsetWidth = Math.round(slideWidth/numSteps)
function handleResizeSlider (e) {
    if (e.target.innerWidth > 768) {
      slideWidth = SLIDER.offsetWidth- WRAPPER.offsetWidth +164;
      SLIDER.style.left = `74px`;
    } else {
      slideWidth = SLIDER.offsetWidth- WRAPPER.offsetWidth +16;
      SLIDER.style.left = `0`;
    }

    numSteps = window.innerWidth > 768? 3 : 6;
    position = 0;
    offsetWidth = Math.round(slideWidth/numSteps)
    sliderLBtn.classList.remove('disabled-controls');
    sliderRBtn.classList.remove('disabled-controls');
    sliderLBtn.classList.add('disabled-controls');
}
window.addEventListener('resize', handleResizeSlider);

function clickLeft () {
  SLIDER.addEventListener('transitionrun', freezeClick)
  if (position > 0) {
    sliderLBtn.classList.remove('disabled-controls');
    sliderRBtn.classList.remove('disabled-controls');
    position -= 1;
    SLIDER.style.left = `${SLIDER.offsetLeft - 8 + offsetWidth }px`;
  }
  if (position === 0) {
    sliderLBtn.classList.add('disabled-controls');
  }
}

function clickRight () {  
  SLIDER.addEventListener('transitionrun', freezeClick);
  if (position < numSteps) {
    sliderLBtn.classList.remove('disabled-controls');
    sliderRBtn.classList.remove('disabled-controls');
    position += 1;
    SLIDER.style.left = `${ SLIDER.offsetLeft - 8 - offsetWidth}px`;
  }
  if (position === numSteps) {
    sliderRBtn.classList.add('disabled-controls');
  }
}


function freezeClick() {
  SLIDER.removeEventListener('transitionrun', freezeClick)
  SLIDER.addEventListener('transitionend', defrostClick)
  sliderLBtn.removeEventListener('click', clickLeft)
  sliderRBtn.removeEventListener('click', clickRight)
}

function defrostClick() {  
  SLIDER.removeEventListener('transitionend', defrostClick)
  sliderLBtn.addEventListener('click', clickLeft)
  sliderRBtn.addEventListener('click', clickRight)
}


sliderLBtn.addEventListener('click', clickLeft)
sliderRBtn.addEventListener('click', clickRight)

