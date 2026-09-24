"use strict";
import { days, minutes, hours, seconds, timer } from "./consts.js";

const NEWYEAR = new Date('2027-01-01')
window.addEventListener('load', () => {
  setInterval(handleTimer, 100)
})
function handleTimer () {
  let currentDate = Date.now();
  let differenceDates = NEWYEAR - currentDate + 1000
  
  
  if (differenceDates > 0) {
    let numDays = Math.floor(differenceDates/(1000*60*60*24))
    differenceDates -= numDays*(1000*60*60*24);
    let numHours = Math.floor(differenceDates/(1000*60*60));
    differenceDates -= numHours*(1000*60*60)
    let numMins = Math.floor(differenceDates/(1000*60));
    differenceDates -= numMins*(1000*60)
    let numSeconds = Math.floor(differenceDates/(1000));

    if (+days.innerText !== numDays) {
      days.innerText = `${numDays}`
    }
    if (+hours.innerText !== numHours) {
      hours.innerText = `${numHours}`
    }
    if (+minutes.innerText !== numMins) {
      minutes.innerText = `${numMins}`
    }
    if (+seconds.innerText !== numSeconds) {
      seconds.innerText = `${numSeconds}`
    }
  } else {
    timer.classList.add('timer_stop');
    timer.innerHTML = '!! Happy New Year !!'
  }


}

