/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem 
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e 
escreva o custo total da compra. */

let macas_unidade,macas_preco1,macas_preco2;

macas_unidade = parseInt(prompt("Digite a quantidade de maças compradas"));
macas_preco1 = 1.30;
macas_preco2 = 1;

if (macas_unidade < 12){
    preco_total = macas_unidade * macas_preco1
    console.log("Você comprou ",macas_unidade," maças, O preço total ficou: ",preco_total);
}else {
    preco_total = macas_unidade * macas_preco2
    console.log("Você comprou ",macas_unidade," maças, O preço total ficou: ",preco_total);
}