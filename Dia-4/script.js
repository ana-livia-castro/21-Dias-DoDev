let idade = Number(prompt("Insira sua idade:"));
let nome = prompt("Insira seu nome:");
// == igual | != diferente | < menor que e > maior que | <= >= menor e maior ou igual
// ===  é igual o valor e o tipo | !==  é diferença o valor  e o tipo
/* if (idade <= 10) {
  console.log("Você tem menos ou tem 10 anos");
} else {
  console.log("Você tem mais que 10 anos");
}
 */

if (idade === 23 && nome === "Ana") {
  console.log("Seu nome é Ana e você tem 23 anos");
}
if (idade === 23 || nome === "Ana") {
  console.log("Você tem 23 anos ou seu nome é Ana");
} else {
  console.log("Seu nome não é Ana e você não tem 23 anos");
}
