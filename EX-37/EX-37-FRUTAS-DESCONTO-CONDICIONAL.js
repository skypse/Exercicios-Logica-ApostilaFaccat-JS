/*Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
------------------------MORANGO-------------------------
Até 5 Kg       --------------   Acima de 5 Kg 
R$ 2,50 por Kg --------------   R$ 2,20 por Kg
------------------------MAÇÃ---------------------------- 
Até 5 Kg       --------------   Acima de 5 Kg
R$ 1,80 por kg --------------   R$ 1,50 por Kg
--------------------------------------------------------
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá 
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de 
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */


let morango_kg, macas_kg, preco_morango, taxa_desconto;
let preco_macas, quilos_total, total_compra, preco_final;

morango_kg = parseFloat(prompt("Quantidade de morangos em KG:"));
macas_kg = parseFloat(prompt("Quantidade de maçãs em KG:"));

if (morango_kg <= 5) {
    preco_morango = morango_kg * 2.5;
    console.log("Preço dos morangos: R$", preco_morango);
} else {
    preco_morango = morango_kg * 2.2;
    console.log("Preço dos morangos: R$", preco_morango);
}

if (macas_kg <= 5) {
    preco_macas = macas_kg * 1.8;
    console.log("Preço das maçãs: R$", preco_macas);
} else {
    preco_macas = macas_kg * 1.5;
    console.log("Preço das maçãs: R$", preco_macas);
}

quilos_total = morango_kg + macas_kg;

total_compra = preco_macas + preco_morango;
console.log("Preço total da compra: R$", total_compra);
console.log("");

if (quilos_total > 8 || total_compra > 25) {
    taxa_desconto = 0.10 * total_compra;
    preco_final = total_compra - taxa_desconto;

    console.log("Preço total da compra com desconto: R$", preco_final);
}
