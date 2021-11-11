"use strict";

const main = document.getElementById("mainDiv");
const secondaryDiv = document.getElementById("secondary");
const ul = document.querySelector(".ul");
const addBtn = document.getElementById("add");
const input = document.getElementById("text");
const sortBtnReverse = document.getElementById("sortZA");
const sortBtn = document.getElementById("sortAZ");
const upperCase = document.getElementById("upperCase");

const create = function () {
  items.push(input.value);
  input.value = "";
  render();
};

// const items = ["Milk", "Bread", "Eggs"];
const items = [];

render();
function render() {
  ul.innerHTML = "";
  for (let i = 0; i < items.length; i++) {
    const li = document.createElement("li");
    const upBtn = document.createElement("button");
    const downBtn = document.createElement("button");
    const erase = document.createElement("button");
    upBtn.classList.add("upBtn");
    downBtn.classList.add("downBtn");
    erase.classList.add("erase");
    let item = document.createTextNode(items[i]);
    let up = document.createTextNode("↑");
    let down = document.createTextNode("↓");
    const deleteList = document.createTextNode("x");
    ul.appendChild(li);
    li.appendChild(item);
    upBtn.appendChild(up);
    downBtn.appendChild(down);
    erase.appendChild(deleteList);
    li.appendChild(erase);
    li.appendChild(upBtn);
    li.appendChild(downBtn);
    erase.addEventListener("click", () => {
      items.splice(i, 1);
      render();
    });

    upBtn.addEventListener("click", function () {
      const shiftingUp = (items, a, b) =>
        ([items[a], items[b]] = [items[b], items[a]]);
      if (i !== 0) {
        shiftingUp(items, i, i - 1);
      }
      render();
    });
    downBtn.addEventListener("click", function () {
      const shiftingUp = (items, a, b) =>
        ([items[a], items[b]] = [items[b], items[a]]);
      if (i !== items.length - 1) {
        shiftingUp(items, i, i + 1);
      }
      render();
    });
  }
}

addBtn.addEventListener("click", create);
document.addEventListener("keydown", function (enter) {
  if (enter.key === "Enter") {
    create();
  }
});

sortBtnReverse.addEventListener("click", function () {
  items.sort().reverse();
  render();
});

sortBtn.addEventListener("click", function () {
  items.sort();
  render();
});

upperCase.addEventListener("click", function () {
  for (let i = 0; i < items.length; i++) {
    const uppercased = items[i].toUpperCase();
    items[i] = uppercased;
    render();
  }
});

lowerCase.addEventListener("click", function () {
  for (let i = 0; i < items.length; i++) {
    const lowercased = items[i].toLocaleLowerCase();
    items[i] = lowercased;
    render();
  }
});
