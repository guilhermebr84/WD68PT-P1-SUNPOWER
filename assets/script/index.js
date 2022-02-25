// os objetos da vida real inseridos aqui
// predios, casas, modulos fotovoltaicos, sol, raios de sol, relogio de consumo (vermelho consumo, verde geração)

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

let countPVMod1 = -1;
let countPVMod2 = -1;
let countPVMod3 = -1;
let countPVMod4 = -1;
let countPVMod5 = -1;
let countPVMod6 = -1;

let countClick1 = -1;
let countClick2 = -1;
let countClick3 = -1;
let countClick4 = -1;
let countClick5 = -1;
let countClick6 = -1;

let consumptionPercent1 = document.getElementById("consumptionPercent1");
let consumptionPercent2 = document.getElementById("consumptionPercent2");
let consumptionPercent3 = document.getElementById("consumptionPercent3");
let consumptionPercent4 = document.getElementById("consumptionPercent4");
let consumptionPercent5 = document.getElementById("consumptionPercent5");
let consumptionPercent6 = document.getElementById("consumptionPercent6");

const pvmodList1 = document.querySelectorAll(".pvmod1");
const pvmodList2 = document.querySelectorAll(".pvmod2");
const pvmodList3 = document.querySelectorAll(".pvmod3");
const pvmodList4 = document.querySelectorAll(".pvmod4");
const pvmodList5 = document.querySelectorAll(".pvmod5");
const pvmodList6 = document.querySelectorAll(".pvmod6");

const engGameMessage = document.getElementById("endgame");
let energySaved = document.getElementById("energySaved");

function handleInsertBtn(pvmodList, countPVMod) {
  pvmodList[countPVMod].style.display = "inline";
}

function meterDec(meter, pvQt, consumptionPercent) {
  let meterDecrease = 100 / pvQt;
  meter.value = Math.floor((meter.value - meterDecrease).toFixed(0));
  consumptionPercent.innerText = meter.value;
}

//document.querySelector(‘.classe’).style.display = ‘’block’ (editado)

// todos os botões do jogo, para cada área

btn1.addEventListener("click", () => {
  countPVMod1++;
  if (countPVMod1 < pvQt1) {
    handleInsertBtn(pvmodList1, countPVMod1);
    meterDec(meter1, pvQt1, consumptionPercent1);
    gameOver();
  } else {
    window.alert("Number of Mods reach the max for roof size");
  }
});

btn2.addEventListener("click", () => {
  countPVMod2++;
  if (countPVMod2 < pvQt2) {
    handleInsertBtn(pvmodList2, countPVMod2);
    meterDec(meter2, pvQt2, consumptionPercent2);
    gameOver();
  } else {
    window.alert("Number of Mods reach the max for roof size");
  }
});

btn3.addEventListener("click", () => {
  countPVMod3++;
  if (countPVMod3 < pvQt3) {
    handleInsertBtn(pvmodList3, countPVMod3);
    meterDec(meter3, pvQt3, consumptionPercent3);
    gameOver();
  } else {
    window.alert("Number of Mods reach the max for roof size");
  }
});

btn4.addEventListener("click", () => {
  countPVMod4++;
  if (countPVMod4 < pvQt4) {
    handleInsertBtn(pvmodList4, countPVMod4);
    meterDec(meter4, pvQt4, consumptionPercent4);
    gameOver();
  } else {
    window.alert("Number of Mods reach the max for roof size");
  }
});

btn5.addEventListener("click", () => {
  countPVMod5++;
  if (countPVMod5 < pvQt5) {
    handleInsertBtn(pvmodList5, countPVMod5);
    meterDec(meter5, pvQt5, consumptionPercent5);
    gameOver();
  } else {
    window.alert("Number of Mods reach the max for roof size");
  }
});

btn6.addEventListener("click", () => {
  countPVMod6++;
  if (countPVMod6 < pvQt6) {
    handleInsertBtn(pvmodList6, countPVMod6);
    meterDec(meter6, pvQt6, consumptionPercent6);
    gameOver();
  } else {
    window.alert("Number of Mods reach the max for roof size");
  }
});

function gameOver() {
  if (
    meter1.value < 2 &&
    meter2.value < 2 &&
    meter3.value < 2 &&
    meter4.value < 2 &&
    meter5.value < 2 &&
    meter6.value < 2
  ) {
    let totalEnergySaved = `${
      pvQt1 * pvModulePower1 +
      pvQt2 * pvModulePower1 +
      pvQt3 * pvModulePower1 +
      pvQt4 * pvModulePower2 +
      pvQt5 * pvModulePower2 +
      pvQt6 * pvModulePower2
    } kWh.month`;
    engGameMessage.style.display = "inline";
    energySaved.innerText = totalEnergySaved;
  }
}

// gameOver();
