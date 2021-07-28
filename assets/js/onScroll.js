"use-strict";

const aside = document.getElementsByTagName("aside")[0];

$(window).scroll(function (event) {
  if (window.screen.width > 425) {
    if (window.pageYOffset > 430) {
      aside.style.cssText = `
      position: fixed;
      top: 75px;
    `;
    } else {
      aside.style.cssText = makeAsideSticky()
    }
  }
});

function makeAsideSticky() {
  return `display: block; position: static; top: 0px;`;
}