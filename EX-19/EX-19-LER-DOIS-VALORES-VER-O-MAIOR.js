/*Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.*/

let valor1,valor2;

valor1=parseInt(prompt("Digite um valor:"));
valor2=parseInt(prompt("Digite outro valor:"));

if (valor1 == valor2){
  console.log("Números iguais não são válidos");
} else if (valor1 > valor2) {
  console.log("O numero ",valor1," é maior que ",valor2);
} else {
  console.log("O numero ",valor2," é maior que ",valor1);
}