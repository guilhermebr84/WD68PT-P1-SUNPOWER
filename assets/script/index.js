// os objetos da vida real inseridos aqui
// predios, casas, modulos fotovoltaicos, sol, raios de sol, relogio de consumo (vermelho consumo, verde geração)
console.log("index.js tá rodando");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

let buildingCons1 = [3500, 100];
let buildingCons2 = [4800, 100];
let buildingCons3 = [3900, 100];
let buildingCons4 = [800, 100];
let buildingCons5 = [350, 100];
let buildingCons6 = [1200, 100];

let meter1 = document.getElementById("m1");
let meter2 = document.getElementById("m2");
let meter3 = document.getElementById("m3");
let meter4 = document.getElementById("m4");
let meter5 = document.getElementById("m5");
let meter6 = document.getElementById("m6");

let pvModulePower1 = 500;
let pvModulePower2 = 200;

const pvArray1 = ["pv11", "pv12", "pv13", "pv14"]; //pvModulePower1 = 500
const pvArray2 = ["pv21", "pv22", "pv23"]; //pvModulePower1 = 500
const pvArray3 = ["pv31", "pv32", "pv33", "pv34", "pv35"]; //pvModulePower1 = 500
const pvArray4 = ["pv41", "pv42", "pv43", "pv44"]; //pvModulePower2 = 200;
const pvArray5 = ["pv51", "pv52", "pv53"]; //pvModulePower2 = 200;
const pvArray6 = ["pv61", "pv62"]; //pvModulePower2 = 200;

let countPVMod = 0;

// retirar os ids do pvmod no index.html
function handleInsertBtn() {
  const pvModImage = document.createElement("img");
  pvModImage.src = "./images/pvmod01.jpg";
  const classImage = document.getElementsByClassName("pvmod-allign1");
  console.log(classImage);
  classImage.innerHTML = pvModImage;
}

// todos os botões do jogo, para cada área

btn1.addEventListener("click", () => {
  handleInsertBtn();
});

btn2.addEventListener("click", () => {
  handleInsertBtn();
});

btn3.addEventListener("click", () => {
  handleInsertBtn();
});

btn4.addEventListener("click", () => {
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
