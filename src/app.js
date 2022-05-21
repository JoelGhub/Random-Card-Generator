/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const icons = ["♦", "♥", "♠", "♣"];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let array;
  let carta;

  //DOM//

  /* Button */

  let button = document.querySelector("#btn");
  button.addEventListener("click", function() {
    let elem = document.querySelector("#cards");
    carta = icons[Math.floor(Math.random() * 4)];
    array = numbers[Math.floor(Math.random() * 13)];
    if (carta === "♥") {
      elem.innerHTML = `
      <div class="inner-div red">${carta}</div>
      <div class="inner-div">${array} </div>
      <div class="inner-div bottom red">${carta}</div>
      `;
    } else {
      elem.innerHTML = `
      <div class="inner-div">${carta}</div>
      <div class="inner-div">${array} </div>
      <div class="inner-div bottom">${carta}</div>
      `;
    }
  });

  /* set 10 secs to change */

  setInterval(myTimer, 10000);

  function myTimer() {
    let elem = document.querySelector("#cards");
    carta = icons[Math.floor(Math.random() * 4)];
    array = numbers[Math.floor(Math.random() * 13)];
    if (carta === "♥") {
      elem.innerHTML = `
      <div class="inner-div red">${carta}</div>
      <div class="inner-div">${array} </div>
      <div class="inner-div bottom red">${carta}</div>
      `;
    } else {
      elem.innerHTML = `
      <div class="inner-div">${carta}</div>
      <div class="inner-div">${array} </div>
      <div class="inner-div bottom">${carta}</div>
      `;
    }
  }

  /* set width and height */
  let button2 = document.querySelector("#set");
  button2.addEventListener("click", function() {
    let width = document.querySelector(".width");
    let height = document.querySelector(".height");
    let show = width.value;
    let show2 = height.value;

    document.querySelector(".card").style.width = show + "px";
    document.querySelector(".card").style.height = show2 + "px";
  });
};
