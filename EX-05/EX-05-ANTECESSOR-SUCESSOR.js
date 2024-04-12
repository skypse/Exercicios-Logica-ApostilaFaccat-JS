// ANTECESSOR E SUCESSOR
/*Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seu antecessor*/

let numero, antecessor, sucessor;

numero=parseInt(prompt("Digite um numero:"));
antecessor = numero - 1;
sucessor = numero + 1;

console.log("O sucessor do numero ",numero," \né: ",sucessor);
console.log("O antecessor do numero ",numero," \né: ",antecessor);