"use strict";
const logItems = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    let numberItems = i + 1;

    const message = `${numberItems} - ${array[i]}`;
    console.log(message);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
