/*Ler um valor e escrever se é positivo, negativo ou zero.*/

let numero;

numero=parseInt(prompt("Digite um numero"));

if (numero > 0){
  console.log("Número Positivo");
}else if (numero == 0){
  console.log("Número Neutro");
}else{
  console.log("Número Negativo");
}