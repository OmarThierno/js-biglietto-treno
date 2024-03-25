// Raccolta dei dati 
let kmToGo = prompt('Quanti Km vuoi percorrere?'); //string
console.log(kmToGo);

let userAge = prompt('Quanti anni hai?'); //string
console.log(userAge);

// Esecuzione 
const priceAtKm = 0.21;

let valuePrice = priceAtKm * kmToGo;
console.log(valuePrice);

let priceDiscount = '';

if (userAge < 18) {
  priceDiscount = valuePrice * 0.2;
} else if (userAge >= 18 && userAge <= 65) {
  priceDiscount = valuePrice;
} else {
  priceDiscount = valuePrice * 0.4;
}

console.log(priceDiscount);

// Output 
const totalPrice = Math.round(priceDiscount * 100) / 100;
console.log(totalPrice);

document.getElementById('final-price').innerHTML = `€ ${totalPrice}`

