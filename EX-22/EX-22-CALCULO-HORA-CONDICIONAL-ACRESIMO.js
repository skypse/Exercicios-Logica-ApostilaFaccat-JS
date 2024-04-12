/*A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar
mais de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo
de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por
hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras,
caso tenham sido trabalhadas (considere que o mês possua 4 semanas exatas).*/

let horas_trabalhadas, salario_hora, salario_total, horas_extras

horas_trabalhadas=parseInt(prompt("Digite horas trabalhadas neste mês"))
salario_hora=parseInt(prompt("Digite o salario por hora"))
salario_total = salario_hora * horas_trabalhadas
if (horas_trabalhadas > 160){
  horas_extras=horas_trabalhadas-160
  salario_total=salario_total+(horas_extras*horas_trabalhadas)*0.5
  alert(`O salario total do funcionario com acresimos é:R$${salario_total}`)
} else {
  alert(`O salario total do funcionario sem acresimos é:R$${salario_total}`)
}