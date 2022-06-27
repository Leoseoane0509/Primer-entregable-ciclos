// Ciclos con FOR
console.log("*******************FOR********************");
// Ejemplo 1
console.log("**********Ejemplo 1**********");
let miArreglo = [4, 6, 8, 2];
let total = 0;
for (let i = 0; i < miArreglo.length; i++) {
  console.log("Iteración " + i);
  console.log(miArreglo[i]);
  total += miArreglo[i];
}
console.log(
  "El resultado de la suma de cada elemento del arreglo es: " + total
);
// Ejemplo 2
console.log("**********Ejemplo 2**********");
let lenguajes = ["JavaScript", "Python", "Java", "C++"];
for (let i = 0; i < lenguajes.length; i++) {
  console.log(lenguajes[i].toUpperCase());
}
/****************************************************************** */
// Ciclos con while
console.log("********************WHILE***************");
// Ejemplo 1
console.log("**********Ejemplo 1**********");
let miArreglo2 = [];
let i = 0;
console.log(miArreglo2);
while (i < 10) {
  miArreglo2.push(i);
  i++;
}
console.log(miArreglo2);
// Ejemplo 2
console.log("**********Ejemplo 2**********");
let numeros = [2, 3, 4, 5, 6, 8, 9, 34];
while (numeros.length > 4) {
  numeros.pop();
}
console.log(numeros);
