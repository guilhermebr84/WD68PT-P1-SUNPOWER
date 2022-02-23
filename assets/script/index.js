// os objetos da vida real inseridos aqui
// predios, casas, modulos fotovoltaicos, sol, raios de sol, relogio de consumo (vermelho consumo, verde geração)
console.log("index.js tá rodando");

const game = new Game()

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");

// arrays para os valores iniciais de consumo e a porcentagem de 100%
let buildingCons1 = [3500, 100];
let buildingCons2 = [4800, 100];
let buildingCons3 = [3900, 100];
let buildingCons4 = [800, 100];
let buildingCons5 = [350, 100];
let buildingCons6 = [1200, 100];

// o medidor deve segue a porcentagem de consumo e vai reduzindo conforme os paineis sao inseridos
let meter1 = document.getElementById("m1");
let meter2 = document.getElementById("m2");
let meter3 = document.getElementById("m3");
let meter4 = document.getElementById("m4");
let meter5 = document.getElementById("m5");
let meter6 = document.getElementById("m6");

// esse é o valor nominal de painel (sem qualquer atribuição de unidade fisica) e a medida que clica e insere um painel, esse subtrai do valor de consumo do 
let pvModulePower1 = 500;
let pvModulePower2 = 200;

// quantidade maxima de paineis por telhado, seguindo a sequencia do html. Após clicar em um telhado "cheio" deve aparecer um windows.alert "no more space" ou algo parecido.
const pvQt1 = 4; //pvModulePower1 = 500
const pvQt2 = 3; //pvModulePower1 = 500
const pvQt3 = 5; //pvModulePower1 = 500
const pvQt4 = 4; //pvModulePower2 = 200;
const pvQt5 = 3; //pvModulePower2 = 200;
const pvQt6 = 2; //pvModulePower2 = 200;

let countPVMod = 0;

// retirar os ids do pvmod no index.html
function handleInsertBtn() {
  const pvModImage = document.createElement("img");
  pvModImage.src = "./images/pvmod01.jpg";
  const classImage = document.getElementsByClassName("pvmod-allign1");
  console.log(classImage);  
  classImage.innerHTML = pvModImage;
}

//document.querySelector(‘.classe’).style.display = ‘’block’ (editado) 

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

function updateSavingInformation () {

}