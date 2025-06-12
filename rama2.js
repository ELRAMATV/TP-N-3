//TP N°2 

let frutas = ["manzana", "plátano", "naranja"];
frutas.push("mango");
frutas.unshift("fresa");
frutas.pop();
frutas.shift();
console.log(frutas);


let nombres = ["Ana", "Luis", "Carlos"];
console.log("Cantidad de nombres:", nombres.length);
nombres.push("María", "José");
console.log("Nueva cantidad de nombres:", nombres.length);


let numeros = [10, 20, 30, 40, 50];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);


let numeros = [5, 10, 15, 20, 25];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("La suma total es:", suma);


let palabras = [];
for (let i = 0; i < 5; i++) {
  let palabra = prompt("Escribe una palabra:");
  palabras.push(palabra);
}
console.log("Palabras ingresadas:", palabras);

