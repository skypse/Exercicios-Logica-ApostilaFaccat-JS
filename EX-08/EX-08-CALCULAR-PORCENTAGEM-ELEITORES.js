/*Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos 
brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total 
de eleitores*/

let total_eleitores,votos_validos,votos_nulos,votos_brancos;
let porcentagem_votos_validos,porcentagem_votos_brancos,porcentagem_votos_nulos;

total_eleitores=parseInt(prompt("Escreva o total dos eleitores"));
votos_validos=parseInt(prompt("Escreva o total de votos validos"));
votos_nulos=parseInt(prompt("Escreva o total de votos nulos"));
votos_brancos=parseInt(prompt("Escreva o total de votos brancos"));

porcentagem_votos_validos= (votos_validos / total_eleitores * 100);
porcentagem_votos_brancos= (votos_brancos / total_eleitores * 100);
porcentagem_votos_nulos= (votos_nulos / total_eleitores * 100);

console.log("Porcentagem de votos validos é: ",porcentagem_votos_validos,"%\nPorcentagem de votos brancos é: ",porcentagem_votos_brancos,"%\nPorcentagem de votos nulos é: ",porcentagem_votos_nulos,"%")