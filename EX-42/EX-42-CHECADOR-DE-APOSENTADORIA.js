/* Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para 
estar em condições, um dos seguintes requisitos deve ser satisfeito: 
- Ter no mínimo 65 anos de idade. 
- Ter trabalhado no mínimo 30 anos. 
- Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos. */

let codigo, ano_nascimento, ano_ingresso, idade, tempo_trabalho;

codigo = parseInt(prompt("Digite o número do empregado (código):"));
ano_nascimento = parseInt(prompt("Digite o ano de nascimento do empregado:"));
ano_ingresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));
idade = 2024 - ano_nascimento;
tempo_trabalho = 2024 - ano_ingresso;

console.log("Idade do empregado: ", idade, " anos");
console.log("Tempo de trabalho na empresa: ", tempo_trabalho, " anos");

if (idade >= 65 || tempo_trabalho >= 30 || (idade >= 60 && tempo_trabalho >= 25)) {
    console.log("Requerer aposentadoria");
} else {
    console.log("Não requerer");
}
