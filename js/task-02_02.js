"use strict";
function calculateEngravingPrice(message, pricePerWord) {
  const wordsAmount = message.split(" ").length;
  const totalEngravingPrice = wordsAmount * pricePerWord;
  return totalEngravingPrice;
}
const result = calculateEngravingPrice("gfdgfd hfhyf kjgjguyg", 12);
console.log(result);
