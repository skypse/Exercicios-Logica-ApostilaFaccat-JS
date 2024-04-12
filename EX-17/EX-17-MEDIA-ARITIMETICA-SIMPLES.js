/*Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever 
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
aluno é aprovado). Escrever também a média calculada. */

let nota1,nota2,media_aritmetica;

nota1=parseInt(prompt("Digite a primeira nota:"));
nota2=parseInt(prompt("Digite a segunda nota:"));
media_aritmetica = (nota1 + nota2) / 2;

console.log("A media do aluno foi: ",media_aritmetica.toFixed(2));