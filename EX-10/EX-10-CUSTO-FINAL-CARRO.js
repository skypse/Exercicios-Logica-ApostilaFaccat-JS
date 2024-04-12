/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do 
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual 
do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo 
para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.*/

let custoFabrica,percentualDistribuidor,percentualImpostos,custoConsumidor;

custoFabrica = parseFloat(prompt("Escreva o custo de Fabrica: "));
percentualDistribuidor = 28 / 100;
percentualImpostos = 45 / 100;
custoConsumidor = custoFabrica * percentualDistribuidor + custoFabrica * percentualImpostos + custoFabrica;

console.log("O custo final ao consumidor é R$",custoConsumidor);