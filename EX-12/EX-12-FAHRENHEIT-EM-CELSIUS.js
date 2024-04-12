/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever 
o valor correspondente em graus Celsius*/

let valor_fahrenheit,valor_celsius

valor_fahrenheit = parseFloat(prompt("Escreva a temperatura em ºF: "));
valor_celsius = 5 / 9 * (valor_fahrenheit - 32);
valor_celsius = valor_celsius.toFixed(2);

console.log("A temperatura em fahrenheit é:",valor_fahrenheit,"ºF");
console.log("A temperatura em celsius fica:",valor_celsius,"ºC");