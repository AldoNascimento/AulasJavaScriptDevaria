class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}

module.exports = Animal; 

const Animal = require('./Animal');

class Ave extends Animal {
    constructor(nome, voa) {
        super(nome);
        this.voa = voa === true;
    }
}

module.exports = Ave; 

const Animal = require('./Animal');

class Mamifero extends Animal {
    constructor(nome, quantidadeMamas) {
        super(nome);
        this.quantidadeMamas = quantidadeMamas;
    }
}

module.exports = Mamifero; 

const Animal = require('./Animal');

class Peixe extends Animal {
    constructor(nome, quantidadeNadadeiras) {
        super(nome);
        this.quantidadeNadadeiras = quantidadeNadadeiras;
    }
}

module.exports = Peixe; 

const Animal = require('./Animal');

class Reptil extends Animal {
    constructor(nome, controlaTemperaturaCorpo) {
        super(nome);
        this.controlaTemperaturaCorpo = controlaTemperaturaCorpo || false;
    }
}

module.exports = Reptil; 

