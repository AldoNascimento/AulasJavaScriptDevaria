class Produto {
    #nome;
    #preco;
    #tipo;

    constructor(nome, preco) {
        this.#nome = nome;
        this.#preco = preco;
        this.#tipo = 'móvel';
    }

    get nome() {
        return this.#nome;
    }

    get preco() {
        return this.#preco * 0.75;
    }
}

const produto = new Produto("Monitor", 2500);
console.log(produto.nome, produto.preco); 


const FormaPagamento = require('./FormaPagamento');

class Boleto extends FormaPagamento {
    efetuarPagamento(valor) {
        console.log(`Efetuando pagamento de R$ ${valor} no boleto`);
    }
}

module.exports = Boleto; 


class FormaPagamento {
    efetuarPagamento(valor) {
        throw new Error('Método não implementado');
    }
}

module.exports = FormaPagamento; 

const FormaPagamento = require('./FormaPagamento');

class Pix extends FormaPagamento {
    efetuarPagamento(valor) {
        console.log(`Efetuando pagamento de R$ ${valor} no PIX`);
    }
}

module.exports = Pix; 

// definicão do enum 
module.exports = Object.freeze({
    BOLETO: 'boleto',
    PIX: 'pix'
}); 