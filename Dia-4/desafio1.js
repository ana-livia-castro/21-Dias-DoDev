const temFome = confirm("Você está com fome?");
const temDinheiro = confirm("Você tem dinheiro?");
const restauranteAberto = confirm("O restaurante está aberto?");

if (!temFome || !temDinheiro) {
  console.log("Hoje a janta será em casa");
} else if (temFome && temDinheiro && !restauranteAberto) {
  console.log("Peça um delivery");
} else if (temFome && temDinheiro && restauranteAberto) {
  console.log("Hoje o jantar será no seu restaurante preferido");
}
