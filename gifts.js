"use strict";
import { giftsList, giftsContainer, giftsSection, allTab, workTab, harmonyTab, healthTab, tabsContainer, returnBtn} from "./consts.js";
import { createCard } from "./createCard.js";

const categories = [
  'All',
  'For Work',
  'For Health',
  'For Harmony'
]

function randomGifts() {
  const giftsNums = []
  while (giftsNums.length < 36) {
    let randomNum = Math.round(Math.random() * 35)
    if (!giftsNums.includes(randomNum)) {
      giftsNums.push(randomNum)
    }
  }
  return giftsNums
}


function createsGifts(type) {
  giftsContainer.innerHTML = ''
  for(let i = 0; i < tabsContainer.children.length; i++) {
    tabsContainer.children[i].classList.remove('active-tab');
  }
  if (type === 'All') {
    allTab.classList.add('active-tab');
    const order = randomGifts();
    for(let i = 0; i < order.length; i++) {
      const card = createCard(giftsList[order[i]], order[i]);
      card.dataset['type'] = 'All'
      giftsContainer.append(card);
    }
  } else {
    const filteredArr = giftsList.filter((item) => item['category'] === type);
    for(let i = 0; i < filteredArr.length; i++) {
      const card = createCard(filteredArr[i], i);
      card.dataset['type'] = filteredArr[i].category
      giftsContainer.append(card);
    }
  }
}

createsGifts(categories[0]);
allTab.addEventListener('click', ()=>{
  createsGifts(categories[0]);
  allTab.classList.add('active-tab')
})

workTab.addEventListener('click', ()=>{
  createsGifts(categories[1]);
  workTab.classList.add('active-tab')
})

healthTab.addEventListener('click', ()=>{
  createsGifts(categories[2]);
  healthTab.classList.add('active-tab')
})

harmonyTab.addEventListener('click', ()=>{
  createsGifts(categories[3]);
  harmonyTab.classList.add('active-tab')
})

window.addEventListener('scroll', function() {
  if (window.scrollY >= 300) {
    if(returnBtn.classList.contains('return-btn_disabled')) {
      returnBtn.classList.remove('return-btn_disabled');
    }
  } else {
    if(!returnBtn.classList.contains('return-btn_disabled')) {
      returnBtn.classList.add('return-btn_disabled');
    }
  }
});