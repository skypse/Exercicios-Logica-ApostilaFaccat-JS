/* Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, 
calcular e escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar 
se saldo atual for maior ou igual a zero escrever a mensagem 'Saldo Positivo', senão 
escrever a mensagem 'Saldo Negativo'. */

let conta_cliente, saldo, debito, credito, saldo_atual;

conta_cliente=parseInt(prompt("Digite o numero da sua conta"));
saldo=parseInt(prompt("Digite o saldo da sua conta"));
debito=parseInt(prompt("Digite o debito da sua conta"))
credito=parseInt(prompt("Digite o credito da sua conta"))

saldo_atual = saldo - debito + credito;

if (saldo_atual >= 0) {
    console.log("---------------------------------------------");
    console.log("Saldo positivo, quantia de: R$", saldo_atual);
} else {
    console.log("---------------------------------------------");
    console.log("Saldo negativo, quantia de: R$", saldo_atual);
}

console.log("---------------------------------------------");
console.log("O saldo atual da conta é: R$", saldo_atual);