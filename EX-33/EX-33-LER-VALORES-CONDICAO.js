/*Ler dois valores e imprimir uma das três mensagens a seguir: 
‘Números iguais’, caso os números sejam iguais 
‘Primeiro é maior’, caso o primeiro seja maior que o segundo; 
‘Segundo maior’, caso o segundo seja maior que o primeiro. */

let numero1, numero2;

numero1=parseInt(prompt("Digite o primeiro número"));
numero2=parseInt(prompt("Digite o segundo número"));

if (numero1 > numero2){
  console.log("O primeiro número",numero1,"é o maior!!");
} else if (numero2 > numero1){
  console.log("O segundo número",numero2,"é o maior!!");
} else {
  console.log("Números iguais!!");
}