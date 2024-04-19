let nomeUsuario = prompt("Qual seu nome?");
let idadeUsuario = parseInt(prompt("Qual sua idade?"));
let alturaUsuario = Number(prompt("Sua altura?"));
let pesoUsuario = Number(prompt("Seu peso?"));

let anoNasc = 2023 - idadeUsuario;
let imc = parseInt(pesoUsuario / (alturaUsuario * alturaUsuario));

console.log(
  "Olá " + nomeUsuario,
  ", você tem " + idadeUsuario,
  "anos, nasceu em " + anoNasc,
  ",tem " + alturaUsuario,
  "de altura, pesa " + pesoUsuario,
  "kg eu IMC é " + imc,
  "Kg/m2"
);
