// regras do jogo
// consumo de energia inicial por imovel
// inserir os modulos fv e a cada um que é inserido o consumo de energia reduz
// quanto mais modulo inserir, o valor de consumo reduz. Se negativar, aparecer uma mensagem "energia sendo injetada na rede" ou algo parecido.

class Game {
  // objetos - jogador e quantidade de modulo PV por area
  constructor() {
    this.pvModArea1 = 0;
    this.pvModArea2 = 0;
    this.pvModArea3 = 0;
    this.pvModArea4 = 0;
    this.pvModArea5 = 0;
    this.pvModArea6 = 0;
  }

  insertPVMod() {
    this.pvModArea1 = 0;

    //se tentar inserir mais módulos que couber na área, inserir um alerta: window.alert(message);
  }

  meterDecrease() {}

  percentDecrease() {}

  energySavingSum() {}

  gameOver() {}
}
