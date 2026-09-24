import { BODY, returnBtn } from "./consts.js"
let bodyWidth = BODY.scrollWidth
  if (bodyWidth !== BODY.scrollWidth) {
    BODY.style.paddingRight = '17px';
  }

window.addEventListener('resize', () => {
  bodyWidth = BODY.scrollWidth;
  if (bodyWidth < BODY.scrollWidth) {
    if(returnBtn) {
      returnBtn.style.right  = '25px'
    }
    BODY.style.paddingRight = 'calc(17px - (100vw - 100%))';
    
    bodyWidth = BODY.scrollWidth
  }
  if (bodyWidth > BODY.scrollWidth) {
    BODY.style.paddingRight = '';
    if(returnBtn) {
      returnBtn.style.right  = ''
    }
    bodyWidth = BODY.scrollWidth;
  } 
});

window.addEventListener('click', () => {
  if (bodyWidth < BODY.scrollWidth) {
    BODY.style.paddingRight = 'calc(17px - (100vw - 100%))';
    if(returnBtn) {
      returnBtn.style.right  = '25px'
    }
    bodyWidth = BODY.scrollWidth
  }
  if (bodyWidth > BODY.scrollWidth) {
    BODY.style.paddingRight = '';
    if(returnBtn) {
      returnBtn.style.right  = ''
    }
    bodyWidth = BODY.scrollWidth;
  }
});

