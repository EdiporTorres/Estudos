import leia from 'readline-sync';

let salario
let abono
let novoSalario

let no1, no2, no3 ,no4, media

salario = leia.questionInt('Digite o valor do salário: ')
console.log ("O salário digitado foi:" +salario)

abono = leia.questionInt('Digite o valor do abono: ')
console.log ("O abono digitado foi:" +abono)

novoSalario = salario + abono;

console.log ("O novo salário é:" +novoSalario)

no1 = leia.questionInt('Digite a nota 1: ')
no2 = leia.questionInt('Digite a nota 2: ')
no3 = leia.questionInt('Digite a nota 3: ')
no4 = leia.questionInt('Digite a nota 4: ')

media = (no1 + no2 + no3 + no4) / 4

console.log ("A média das notas é:" +media)

