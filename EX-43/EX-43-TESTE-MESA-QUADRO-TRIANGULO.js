/*Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:
Variáveis 
a b C Mens 
1 2 3  ??
3 4 5  ??
2 2 4  ??
4 4 4  ??
5 3 3  ??
*/

let valor_a, valor_b, valor_c, triangulo;

valor_a = parseInt(prompt("Digite um valor para ser atribuído à variável 'A': "));
valor_b = parseInt(prompt("Digite um valor para ser atribuído à variável 'B': "));
valor_c = parseInt(prompt("Digite um valor para ser atribuído à variável 'C': "));

if (valor_a < valor_b + valor_c && valor_b < valor_a + valor_c && valor_c < valor_a + valor_b) {
    if (valor_a === valor_b && valor_b === valor_c) {
        triangulo = "Triângulo Equilátero";
    } else {
        if (valor_a === valor_b || valor_b === valor_c || valor_a === valor_c) {
            triangulo = "Triângulo Isósceles";
        } else {
            triangulo = "Triângulo Escaleno";
        }
    }
} else {
    triangulo = "Não é possível formar um triângulo";
}
console.log(triangulo);