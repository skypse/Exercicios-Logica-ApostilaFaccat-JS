/*Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja 
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser 
apresentada a mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser 
lido outro valor que é a senha. Se esta senha estiver incorreta (a certa é 9999) 
deve ser mostrada a mensagem ‘senha incorreta’. Caso a senha esteja correta,
deve ser mostrada a mensagem ‘Acesso permitido’.*/

let cod_usuario;

cod_usuario = parseInt(prompt("Coloque seu Código de Usuário:"));

if (cod_usuario === 1234) {
    console.log("Usuário Inválido!");
} else {
    if (cod_usuario === 9999) {
        console.log("Acesso Permitido");
    } else {
        console.log("Senha incorreta!");
    }
}
