/*Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome 
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE*/

let gols_time1, gols_time2, time1, time2, resultado;

time1 = prompt("Escreva o nome do Primeiro TIME");
gols_time1 = prompt(`Escreva a quantidade de gols feito por "${time1}"`);
time2 = prompt("Escreva o nome do Segundo TIME");
gols_time2 = prompt(`Escreva a quantidade de gols feito por "${time2}"`);

if (gols_time1 > gols_time2){
  console.log("-------------------------------");
  console.log("O time",time1,"foi o vencedor!!");
  console.log("-------------------------------");
} else if (gols_time2 > gols_time1){
  console.log("-------------------------------");
  console.log("O time",time2,"foi o vencedor!!");
  console.log("-------------------------------");
} else {
  console.log("-------------------------------");
  console.log("Os times empataram!");
  console.log("-------------------------------");
}
