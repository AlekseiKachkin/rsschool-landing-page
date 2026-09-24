"use strict";
import { giftsList } from "./consts.js";


function createTag(tag = 'div', ...className ) {
  const el = document.createElement(tag);
  el.classList.add(...className);
  return el;
}

function createGridLine (powerName, powers) {
  const line = createTag('div', 'line-grid', `${powerName}-grid`);

  const label = createTag('div', 'line-label', 'paragraph');
  label.innerText = powerName;
  line.append(label);

  const value = createTag('div', 'line-value', 'paragraph');
  value.innerText = powers[powerName];
  line.append(value);

  const stars = createTag('div', "line-stars");
  line.append(stars);

  let count = parseInt(powers[powerName])/100;
  for(let i = 1; i <=5; i++) {
    const star = document.createElement('img');
    if (i <= count) {
      star.src = "./assets/svg/snowflake.svg"
    } else {
      star.src = "./assets/svg/snowflakeOpacity.svg"
    }
    star.alt = `${i}`
    stars.append(star)
  }
  return line
}

function createSelectedCard(num, type) {
  let sortArr = []
  console.log(type)
    if (type === 'All') {
    sortArr = giftsList
  } else {
    sortArr = giftsList.filter((item) => item['category'] === type);
  }
  return createCard(sortArr[num], num)
}


function handleCardClick(e) {
  const giftCardWrapper = createTag('div', 'gift-card_wrapper');
  document.body.append(giftCardWrapper);
  const clickedCard = e.currentTarget;
  const index = +clickedCard.dataset['num'];

  giftCardWrapper.addEventListener('click', (e) => {
    if (e.currentTarget === e.target) {
      giftCardWrapper.remove();
    }
  })
  
  const card = createSelectedCard(index, e.currentTarget?.dataset['type'] || 'All');
  card.id = 'selected-card';
  card.removeEventListener('click', handleCardClick)
  giftCardWrapper.append(card);
  
  card.children[0].addEventListener('click', () => {
    giftCardWrapper.remove();
  })
}

export function createCard(cardObj, index) {
  const giftCard = createTag('div', 'gift-card');
  giftCard.addEventListener('click', handleCardClick)
  giftCard.dataset['num'] = `${index}`
  const closeBtn = createTag('div', 'close-btn');
  closeBtn.innerHTML = (
    `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M30 10L10 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M10 10L30 30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>`
  )
  giftCard.append(closeBtn);

  const categoryClass = `${cardObj?.category.toLowerCase().split(' ').join('-')}-img`
  const giftImg = createTag('div', 'gift-img', categoryClass)
  giftCard.append(giftImg);

  const cardInfo = createTag('div', 'card-info');
  giftCard.append(cardInfo);

  const giftText = createTag('div', "gift-text");
  cardInfo.append(giftText);

  const giftCategory = createTag('h4', "gift-category", `${cardObj?.category.toLowerCase().split(' ')[1]}`, "header4");
  giftCategory.innerText = cardObj.category;
  giftText.append(giftCategory);

  const giftName = createTag('h3', 'header3');
  giftName.innerText = cardObj["name"]
  giftText.append(giftName);

  const giftDescription = createTag('p', 'paragraph');
  giftDescription.innerText = cardObj["description"];
  giftText.append(giftDescription);

  const superContainer = createTag('div', 'super-container');
  cardInfo.append(superContainer);

  const superHeader = createTag('h4', 'header4');
  superHeader.innerText = 'Adds superpowers to:';
  superContainer.append(superHeader);

  const superGrid = createTag('div', 'super-grid');
  superContainer.append(superGrid);

  const live = createGridLine ('live', cardObj['superpowers'])
  superGrid.append(live);

  const create = createGridLine ('create', cardObj['superpowers'])
  superGrid.append(create);

  const love = createGridLine ('love', cardObj['superpowers'])
  superGrid.append(love);

  const dream = createGridLine ('dream', cardObj['superpowers'])
  superGrid.append(dream);

  return giftCard
}

