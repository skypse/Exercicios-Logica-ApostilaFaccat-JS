/*Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida 
e o preço 
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), 
o desconto e o total pagar (total a pagar = total - desconto), sabendo-se que: 
- Se quantidade <= 5 o desconto será de 2% 
- Se quantidade > 5 e quantidade <=10 o desconto será de 3% 
- Se quantidade > 10 o desconto será de 5%*/

let produto_quantidade, produto_preco_unidade, total, total_a_pagar, desconto, taxa_desconto, produto_nome;

produto_nome = prompt("Digite o nome do produto:");
produto_quantidade = parseFloat(prompt("Digite quantas unidades você comprou:"));
produto_preco_unidade = parseFloat(prompt("Digite o preço unitário do produto:"));
total = produto_quantidade * produto_preco_unidade;

if (produto_quantidade <= 5) {
    taxa_desconto = 0.02;
} else {
    if (produto_quantidade <= 10) {
        taxa_desconto = 0.03;
    } else {
        taxa_desconto = 0.05;
    }
}

desconto = total * taxa_desconto;
total_a_pagar = total - desconto;

console.log("Total da compra: R$", total.toFixed(2));
console.log("");
console.log("Desconto aplicado: R$", desconto.toFixed(2));
console.log("");
console.log("Total a pagar: R$", total_a_pagar.toFixed(2));