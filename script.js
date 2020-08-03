"use strict";

let total = 0;

let limeCola = document.querySelector(".lime-cola");
let saltedPeanuts = document.querySelector(".salted-peanuts");
let chocolateBar = document.querySelector(".chocolate-bar");
let fruitGummies = document.querySelector(".fruit-gummies");

limeCola.addEventListener("click", () => {
  let amount = parseInt(limeCola.getAttribute("data-amount"));
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = total;
});

saltedPeanuts.addEventListener("click", () => {
  let amount = parseInt(saltedPeanuts.getAttribute("data-amount"));
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = total;
});

chocolateBar.addEventListener("click", () => {
  let amount = parseInt(chocolateBar.getAttribute("data-amount"));
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = total;
});

fruitGummies.addEventListener("click", () => {
  let amount = parseInt(fruitGummies.getAttribute("data-amount"));
  total += amount;
  let totalParagraph = document.querySelector(".total");
  totalParagraph.innerText = total;
});

let coinFormVariable = document.querySelector(".make-money-form");

coinFormVariable.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(coinFormVariable);
  let howManyVariable = data.get("how-many-coins");
  let whichCoinVariable = data.get("which-coin");
  let newCoin = document.createElement("div");
  newCoin.setAttribute("class", "");
});

// console.log(coinStorage);
{
  /* <div class="penny coin">Penny</div>
    <div class="nickel coin">Nickel</div>
    <div class="dime coin">Dime</div>
    <div class="quarter coin">Quarter</div> */
}
