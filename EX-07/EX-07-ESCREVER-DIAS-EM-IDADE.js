/*Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva a idade 
dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias. */

let anos, meses, dias, idade;

anos=parseInt(prompt("Digite quantos anos completos você tem"));
meses=parseInt(prompt("Digite quantos meses se passaram apos o seu ultimo aniversario"));
dias=parseInt(prompt("Escreva quantidade de dias que passou apos seu ultimo aniversario"));
idade = (anos * 365 + meses * 30 + dias);

alert("Você tem "+idade+" dias de vida")