// os objetos da vida real inseridos aqui
// predios, casas, modulos fotovoltaicos, sol, raios de sol, relogio de consumo (vermelho consumo, verde geração)
console.log("index.js tá rodando");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

let grid1 = 100;
let grid2 = 100;
let grid3 = 100;
let grid4 = 100;
let grid5 = 100;
let grid6 = 100;

const pvArray1 = ["pv11", "pv12", "pv13", "pv14"];
const pvArray2 = ["pv21", "pv22", "pv23"];
const pvArray3 = ["pv31", "pv32", "pv33", "pv34", "pv35"];
const pvArray4 = ["pv41", "pv42", "pv43", "pv44"];
const pvArray5 = ["pv51", "pv52", "pv53"];
const pvArray6 = ["pv61", "pv62"];

function handleInsertBtn(insertPVMod) {
  let countPV = 0;
  let gridLess = 0;
}

// todos os botões do jogo, para cada área

btn1.addEventListener("click", () => {
  console.log("botão 1");
  handleInsertBtn();
});

btn2.addEventListener("click", () => {
  console.log("botão 2");
  handleInsertBtn();
});

btn3.addEventListener("click", () => {
  console.log("botão 3");
  handleInsertBtn();
});

btn4.addEventListener("click", () => {
  console.log("botão 4");
  handleInsertBtn();
});

btn5.addEventListener("click", () => {
  console.log("botão 5");
  handleInsertBtn();
});

btn6.addEventListener("click", () => {
  console.log("botão 6");
  handleInsertBtn();
});
