/* Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres 
(considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). 
Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, e o produto das idades 
do homem mais novo com a mulher mais velha. */

let idade_homem1, idade_homem2, idade_mulher1, idade_mulher2, idade_mais_velho, idade_mais_novo;
let idade_mais_velha, idade_mais_nova, soma_idade_mais_velho_mais_nova, produto_idade_mais_novo_mais_velha;

idade_homem1 = parseInt(prompt("Idade do Homem 1:"));
idade_homem2 = parseInt(prompt("Idade do Homem 2:"));
idade_mulher1 = parseInt(prompt("Idade da Mulher 1:"));
idade_mulher2 = parseInt(prompt("Idade da Mulher 2:"));

if (idade_homem1 > idade_homem2) {
  idade_mais_velho = idade_homem1;
  idade_mais_novo = idade_homem2;
} else {
  idade_mais_velho = idade_homem2;
  idade_mais_novo = idade_homem1;
}

if (idade_mulher1 > idade_mulher2) {
  idade_mais_velha = idade_mulher1;
  idade_mais_nova = idade_mulher2;
} else {
  idade_mais_velha = idade_mulher2;
  idade_mais_nova = idade_mulher1;
}

soma_idade_mais_velho_mais_nova = idade_mais_velho + idade_mais_novo;
produto_idade_mais_novo_mais_velha = idade_mais_nova * idade_mais_velha;

console.log("Soma da Idade Mais Velho com Mais Nova:", soma_idade_mais_velho_mais_nova);
console.log("Produto da Idade Mais Novo com Mais Velha:", produto_idade_mais_novo_mais_velha);