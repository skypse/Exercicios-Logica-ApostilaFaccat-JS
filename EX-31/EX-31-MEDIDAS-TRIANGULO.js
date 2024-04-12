/*Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever
se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser
menor que a soma dos outros 2 lados. */

let lado_a, lado_b, lado_c
let soma_ab,soma_bc,soma_ac

lado_a = parseFloat(prompt("Atribua um valor ao lado A:"));
lado_b = parseFloat(prompt("Atribua um valor ao lado B:"));
lado_c = parseFloat(prompt("Atribua um valor ao lado C:"));

soma_ab = lado_a + lado_b;
soma_bc = lado_b + lado_c;
soma_ac = lado_a + lado_c;

if (soma_ab > lado_c && soma_bc > lado_a && soma_ac > lado_b) {
    console.log("Pode formar um triângulo");
} else {
    console.log("Não pode formar um triângulo");
}