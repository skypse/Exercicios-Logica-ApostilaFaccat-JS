/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por 
mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por 
ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor 
total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. 
Calcule e escreva o salário final do vendedor. */

let carros_vendidos,valor_total_vendas,salario_fixo,valor_carro_comissao,salario_final;

carros_vendidos = parseFloat(prompt("Numero de carros Vendidos: "));
valor_total_vendas = parseFloat(prompt("Valor total com as vendas do Funcionario: "));
salario_fixo = parseFloat(prompt("Salario Fixo do Funcionario: "));
valor_carro_comissao = parseFloat(prompt("Valor da comissao fixa dos Carros: "));
valor_total_vendas = valor_total_vendas * 0.05;
salario_final = valor_carro_comissao * carros_vendidos + valor_total_vendas + salario_fixo;

console.log("O salario final do Funcionario é R$",salario_final);