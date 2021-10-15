"use strict";
{
  const ham = document.querySelector(".hamburger");
  const nav = document.querySelector('.nav');
  ham.addEventListener("click", () => {
    mobileOpen();
  });
  nav.addEventListener('click', () => {
    mobileOpen();
  });
const mobileOpen = function () {
  ham.classList.toggle("menu-open");
  nav.classList.toggle("menu-open");
}





  //reduceを使ったアニメーション
  const reduces = function(el) {
    const redTexts = document.querySelectorAll(el);
    redTexts.forEach(redText => {
      const innerText = redText.innerHTML;
      const redArry = innerText.trim().split('');
      const result = redArry.reduce(function(accu, curr) {
        console.log(accu,curr);
        return `${accu}<span class=${'show'}>${curr}</span>`;
      },'');
      redText.innerHTML=result;
    })
  }
  reduces('.red_text');
}
