// os objetos da vida real inseridos aqui
// predios, casas, modulos fotovoltaicos, sol, raios de sol, relogio de consumo (vermelho consumo, verde geração)
console.log('index.js tá rodando')


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');

console.log(btn1);

function handleInsertBtn(){

}

// todos os botões do jogo, para cada área
btn1.addEventListener('click', () => {
    console.log("botão 1")
    handleInsertBtn()
})

btn2.addEventListener('click', () => {
    console.log("botão 2")
    handleInsertBtn()
})

btn3.addEventListener('click', () => {
    console.log("botão 3")
    handleInsertBtn()
})

btn4.addEventListener('click', () => {
    console.log("botão 4")
    handleInsertBtn()
})

btn5.addEventListener('click', () => {
    console.log("botão 5")
    handleInsertBtn()
})

btn6.addEventListener('click', () => {
    console.log("botão 6")
    handleInsertBtn()
})



class PVinsertion {

    constructor(xPos, yPos) {
        this.xPos = xPos;
        this.yPos= yPos;
    }


}



const sun = 0
const sunbeams = 0
const pvMod = 0
const energyCon = 0
const energyGen = 0
const urbanScenario = 0
const countryScenario = 0
const building1 = 0
const building2 = 0
const building3 = 0
const house1 = 0
const house2 = 0
const house3 = 0



