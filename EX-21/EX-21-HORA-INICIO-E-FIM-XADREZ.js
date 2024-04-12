/*Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras,
sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração
do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.*/

let hora_inicio,hora_final;

hora_inicio = parseInt(prompt("Digite hora de inicio do jogo (0 e 23):"));
hora_final = parseInt(prompt("Digite hora do final do jogo (0 e 23): "));

if (hora_inicio <= hora_final){
  duracao = hora_final - hora_inicio;
}else {
  duracao = (24 - hora_inicio) + hora_final;
}

console.log("A duração do jogo é de ",duracao," horas.")