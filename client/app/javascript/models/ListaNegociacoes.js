class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
        // this._negociacoes = [].concat(this._negociacoes, negociacao);
    }

    get negociacoes() {
        // programacao defensiva
        return [].concat(this._negociacoes);
    }

    esvazia() {
        this._negociacoes = [];
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }
}