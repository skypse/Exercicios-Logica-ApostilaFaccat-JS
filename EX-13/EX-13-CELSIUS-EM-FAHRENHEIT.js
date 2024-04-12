/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o 
valor correspondente em graus Celsius*/

let valor_celsius,valor_fahrenheit;

valor_celsius = parseFloat(prompt("Escreva a temperatura em ºC: "));
valor_fahrenheit = 9 / 5 * valor_celsius + 32;

alert (valor_celsius+"ºC é igual a: "+valor_fahrenheit+"ºF");
console.log("A temperatura em celsius é:",valor_fahrenheit,"ºF");
console.log("A temperatura em fahrenheit fica:",valor_celsius,"ºC");