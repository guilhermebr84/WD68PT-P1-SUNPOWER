// regras do jogo

// cenarios
// consumo de energia inicial por imovel
// inserir os modulos fv e a cada um que é inserido o consumo de energia reduz
// quanto mais modulo inserir, o valor de consumo reduz. Se negativar, aparecer uma mensagem "energia sendo injetada na rede" ou algo parecido



console.log('game.js tá rodando')

class Game {

    // objetos - jogador, telhado e modulo PV
    constructor(player, roof, pvMod){
        this.player = player;
        this.roof = roof;
        this.pvMod = pvMod;
    }
    
    checkPlayerSaves() {
    if (this.player.energysave > 1000){
        return `you save ${this.energysave} kwh.month`;
    } 
    }
}

class Player {
    constructor(name){
        this.name = name;
        this.win = ''
    }

    // insere o modulo PV sobre os locais indicados
    setPV(insertPv){
        this.insertPV = insertPV;
        this.energySave = 0
    }
}
