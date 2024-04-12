/*Ler dois valores (considere que não serão lidos valores iguais)
e escrevê-los em ordem crescente.*/

let valor1,valor2;

valor1=parseInt(prompt("Digite um valor:"));
valor2=parseInt(prompt("Digite outro valor:"));

if (valor1 == valor2){
  console.log("Números iguais não são válidos");
} else if (valor1 > valor2) {
  console.log("Seus valores citados em ordem crescente fica:");
  console.log(valor2,"e",valor1);
} else {
  console.log("Seus valores citados em ordem crescente fica:");
  console.log(valor1,"e",valor2);
}