"use strict";

let totalLine = document.querySelector(".total-line");
let buttons = document.querySelectorAll(".buttons1");
let total = 0;

buttons.forEach((snack) => {
  snack.addEventListener("click", () => {
    let amount = Number(snack.getAttribute("data-amount"));
    total += amount;
    totalLine.innerText = `Total: $${total}`;
  });
});

// let limeCola = document.querySelector(".lime-cola");
// let saltedPeanuts = document.querySelector(".salted-peanuts");
// let chocolateBar = document.querySelector(".chocolate-bar");
// let fruitGummies = document.querySelector(".fruit-gummies");

// limeCola.addEventListener("click", () => {
//   let amount = parseInt(limeCola.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = total;
// });

// saltedPeanuts.addEventListener("click", () => {
//   let amount = parseInt(saltedPeanuts.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = total;
// });

// chocolateBar.addEventListener("click", () => {
//   let amount = parseInt(chocolateBar.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = total;
// });

// fruitGummies.addEventListener("click", () => {
//   let amount = parseInt(fruitGummies.getAttribute("data-amount"));
//   total += amount;
//   let totalParagraph = document.querySelector(".total");
//   totalParagraph.innerText = total;
// });

let coinFormVariable = document.querySelector(".make-money-form");
let coinContainer = document.querySelector(".container");

coinFormVariable.addEventListener("submit", (event) => {
  event.preventDefault();
  let data = new FormData(coinFormVariable);
  let howManyVariable = data.get("how-many-coins");
  let whichCoinVariable = data.get("which-coin");
  for (let i = 0; i < howManyVariable; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add(whichCoinVariable, "coin");
    newCoin.innerText = whichCoinVariable;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  FormData.reset();
});
// prob 3

let lightBulb = document.querySelector(".lightbulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");

onButton.addEventListener("click", () => {
  lightBulb.classList.add("light");
});

offButton.addEventListener("click", () => {
  lightBulb.classList.remove("light");
});

toggleButton.addEventListener("click", () => {
  lightBulb.classList.toggle("light");
});

endButton.addEventListener("click", () => {
  lightBulb.remove();
  let buttons = document.querySelectorAll(".switch");
  buttons.forEach((button) => {
    button.disabled = true;
  });
});
