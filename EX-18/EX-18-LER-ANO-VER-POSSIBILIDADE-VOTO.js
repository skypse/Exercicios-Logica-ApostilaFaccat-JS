/*Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela 
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).*/

let ano_atual,ano_nascimento,idade;

ano_atual=parseInt(prompt("Digite o ano atual:"));
ano_nascimento=parseInt(prompt("Digite o seu ano de nascimento:"));
idade = ano_atual - ano_nascimento;

if (idade < 16){
  console.log("Não tem direito ao voto");
} else if (idade < 18){
  console.log("Voto Opcional");
} else{
  console.log("Voto Obrigatório");
}
