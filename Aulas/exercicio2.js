const nome = 'João';
const sobreNome = 'Lucas';
const idade = 24;
const peso = 54;
const alturaEmMetro = 1.67;
let anoNascimento;
let imc;

imc = peso / (alturaEmMetro * alturaEmMetro);
anoNascimento = 2022 - idade;

//concatenado com + 
console.log(nome + ' ' + sobreNome + ' tem ' + idade + ' anos' + ' pesa ' + peso + 'kg');

// template string utilizar dólar + {nome da variavel a ser chamada}
console.log(`tem ${alturaEmMetro} de altura e seu IMC é de ${imc}`);

//concatenaod com virgula ,
console.log(nome, sobreNome, 'nasceu em', anoNascimento);




