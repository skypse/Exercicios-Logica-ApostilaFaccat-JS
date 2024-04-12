/*Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 
maiores*/

let primeiro_valor,segundo_valor,terceiro_valor;

primeiro_valor = parseFloat(prompt("Digite o primeiro Valor:"));
segundo_valor = parseFloat(prompt("Digite o segundo Valor:"));
terceiro_valor = parseFloat(prompt("Digite o terceiro Valor:"));

if ((primeiro_valor > segundo_valor && segundo_valor > terceiro_valor) || 
    (segundo_valor > primeiro_valor && primeiro_valor > terceiro_valor)) {
    let soma = primeiro_valor + segundo_valor;
    console.log("A soma dos maiores valores é:", soma);
} else {
    if ((segundo_valor > terceiro_valor && terceiro_valor > primeiro_valor) || 
        (terceiro_valor > segundo_valor && segundo_valor > primeiro_valor)) {
        let soma = segundo_valor + terceiro_valor;
        console.log("A soma dos maiores valores é:", soma);
    } else {
        let soma = terceiro_valor + primeiro_valor;
        console.log("A soma dos maiores valores é:", soma);
    }
}
