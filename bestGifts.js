"use strict";
import { giftsList, bestGiftsContainer } from "./consts.js";
import { createCard } from "./createCard.js";


function randomGifts() {
  const giftsNums = []
  while (giftsNums.length < 4) {
    let randomNum = Math.round(Math.random() * 35)
    if (!giftsNums.includes(randomNum)) {
      giftsNums.push(randomNum)
    }
  }
  return giftsNums
}
const nums = randomGifts();
nums.forEach(item => {
  const card = createCard(giftsList[item], item);
  bestGiftsContainer.append(card)
})
