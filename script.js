const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const bnt = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

function suma() {
  const sumaInput = Number(input1.value) + Number(input2.value);
  pResult.innerText = "Resultado: " + sumaInput;
}

function resta() {
  const restaInput = Number(input1.value) - Number(input2.value);
  pResult.innerText = "Resultado: " + restaInput;
}
function multiplicar() {
  const multiplicarInput = Number(input1.value) * Number(input2.value);
  pResult.innerText = "Resultado: " + multiplicarInput;
}

function dividir(event) {
  const dividirInput = Number(input1.value) / Number(input2.value);
  pResult.innerText = "Resultado: " + dividirInput;
}
