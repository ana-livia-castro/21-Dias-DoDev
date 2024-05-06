const nome = prompt("Insira o nome do motorista:");
const idade = parseInt(prompt("Quantos anos você tem?"));
const TemCarta = confirm("Possui carta de motorista:");
const TemCarro = confirm("Tem carro:");

if (idade <= 18 || !TemCarta) {
  console.log(nome + ", você não pode dirigir");
} else if (idade >= 18 && TemCarta && !TemCarro) {
  console.log(nome + ", você pode dirigir mas não tem carro.");
} else if (idade >= 18 && TemCarta && TemCarro) {
  console.log(nome + ", você será o motorista");
}
