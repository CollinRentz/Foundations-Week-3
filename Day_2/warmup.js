const best = (crypto[0]) => {
let lowestPrice = crypto [0];
for (const currPrice of crypto) {
if (currPrice < lowestPrice) {
lowestPrice = currPrice
}
console. log (currPrice);
profitArray.push (currPrice - lowestPrice)
}
return Math.max(... profitArray)
console. log (theShortsDestroyer ( [7, 9, 5, 6, 3, 2]));