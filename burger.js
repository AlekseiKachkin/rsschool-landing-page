"use strict";
import { BODY, VER, HOR, burgerIcon, burgerNav } from "./consts.js";
burgerNav.style.transition = "left 0";
const burgerLinks = burgerNav.children;
function handleBurgerIcon () {
  //при нажатии на бургер
  BODY.classList.add('body_no-scroll')
  burgerNav.style.transition = "left 0.5s ease-in-out";
  burgerIcon.classList.add('burger-container_active');
  burgerNav.classList.add('nav-burger_active')
  HOR.classList.add('hor');
  VER.classList.add('ver');

  burgerIcon.removeEventListener('click', handleBurgerIcon);
  burgerIcon.addEventListener('click', closeBurgerIcon)
  for (let link of burgerLinks) {link.addEventListener('click', handleBurgerNav)}
}

function closeBurgerIcon () {
  BODY.classList.remove('body_no-scroll')
  burgerIcon.classList.remove('burger-container_active');
  burgerNav.classList.remove('nav-burger_active')
  HOR.classList.remove('hor')
  VER.classList.remove('ver');
  
  
  burgerIcon.removeEventListener('click', closeBurgerIcon);
  burgerIcon.addEventListener('click', handleBurgerIcon);
  for (let link of burgerLinks) {link.removeEventListener('click', handleBurgerNav)}

}

function handleBurgerNav () {
  //при нажатии на навигацию
  BODY.classList.remove('body_no-scroll');
  burgerIcon.classList.remove('burger-container_active');
  burgerNav.classList.remove('nav-burger_active')
  HOR.classList.remove('hor')
  VER.classList.remove('ver');

  burgerIcon.removeEventListener('click', closeBurgerIcon)
  burgerIcon.addEventListener('click', handleBurgerIcon);
  for (let link of burgerLinks) {link.removeEventListener('click', handleBurgerNav)}
}

function handleResizeBurger () {
  BODY.classList.remove('body_no-scroll');  
  burgerIcon.classList.remove('burger-container_active');
  burgerNav.classList.remove('nav-burger_active');
  burgerNav.style.transition = ``
  HOR.classList.remove('hor');
  VER.classList.remove('ver');
  burgerIcon.removeEventListener('click', closeBurgerIcon);
  burgerIcon.removeEventListener('click', handleBurgerIcon);
  burgerIcon.addEventListener('click', handleBurgerIcon);
  for (let link of burgerLinks) {link.removeEventListener('click', handleBurgerNav)}
}


for (let link of burgerLinks) {link.addEventListener('click', handleBurgerNav)}
burgerIcon.addEventListener('click', handleBurgerIcon);
window.addEventListener('resize', handleResizeBurger);
