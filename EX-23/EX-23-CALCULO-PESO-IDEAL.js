/*Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule 
e mostre seu peso ideal, utilizando as seguintes fórmulas: 
 - para sexo masculino: peso ideal = (72.7 * altura) - 58 
 - para sexo feminino: peso ideal = (62.1 * altura) - 44.7 */

let nome, genero;
let peso_ideal, altura;

nome=prompt("Digite seu nome");
altura=parseFloat(prompt("Digite sua altura (em metros)"));
genero=prompt("Digite o sexo (M para masculino, F para feminino)");

if (genero === "M"){
  peso_ideal = (72.7 * altura) - 58;
} else {
  peso_ideal = (62.1 * altura) - 44.7;
}

console.log("O peso ideal de ",nome," é",peso_ideal.toFixed(2))