const swiper = new Swiper('.swiper', {
  autoplay:{
    delay:4000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  loop:true,

  pagination:{
    el:'.swiper-pagination',
    clickable:true,
  },
});

let menu = document.querySelector('.menu')
let nums = document.querySelectorAll('.num')
let start = false

const startCount = (el) => {
  let max = el.dataset.val
}