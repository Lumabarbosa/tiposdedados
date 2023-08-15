const prompt = require('prompt-sync')({sigint: true});

var notaUm 
var notaDois 
var notaTres
var soma
var media

var notaUm = Number(prompt('Digite a 1ª nota: '))
var notaDois = Number(prompt('Digite a 2ª nota: '))
var notaTres = Number(prompt('Digite a 3ª nota: '))
var soma = notaUm + notaDois + notaTres
var media = soma / 3
console.log(`A média do aluno é ${media}.`)



