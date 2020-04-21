"use strict";

const numberInput = function () {
  const numbers = [];
  let input;
  let message;
  let total = 0;
  while (input !== null) {
    input = prompt(`Введите число`, 0);
    let numberValue = Number(input);
    if (isNaN(numberValue)) {
      message = "Вы ввели не число";

      console.log(message);

      break;
    } else {
      numbers.push(numberValue);
      for (let i = 0; index < numbers.length; i += 1) {
        total += numbers[i];
      }
    }
    total += numberValue;
    return total;
  }

  console.log(`Общая сумма равна ${total}`);
};
