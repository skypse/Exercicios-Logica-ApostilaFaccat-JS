/*Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:*/
/*
X ----- Y ------  Z  ---------- Resposta
3   --  2 ------ 11  ----------    B
150 --  3 ------ 455 ----------    C
7   -- -1 ------ -2  ----------    A
-2  --  5 ------ -5  ----------    A
50  --  3 ------ 155 ----------    C
*/

let valor_x,valor_y,valor_z,resposta;

alert("Faça os testes que pede na tabela para obter os valores corretos!!");
valor_x=parseInt(prompt("Digite um valor inteiro para ser atribuido 'X'"));
valor_y=parseInt(prompt("Digite um valor inteiro para ser atribuido 'Y'"));

valor_z = (valor_x * valor_y) + 5;

if (valor_z <= 0){
  resposta == "A";
} else if (valor_z <= 100){
  resposta == "B";
} else {
  resposta == "C";
}

console.log("O valor de 'z' é:",valor_z);
console.log("A resposta é:",resposta)