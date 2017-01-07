// Import e Exports ainda nao suportados nos navegadores - 18/12/2016
//import Negociacao from 'Negociacao.js';
//import DateHelper from 'DateHelper.js'

class NegociacaoController {

    constructor() {

        // $ recebe o querySelector que ainda possui o contexto do document gracas ao bind
        let poison = document.querySelector.bind(document);
        this._inputData = poison("#data");
        this._inputQuantidade = poison("#quantidade");
        this._inputValor = poison("#valor");
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        // BEGIN | Se os codigos abaixo alterarem o array listaNegociacoes da classe ListaNegociacoes e pq ela nao esta blindada.
            this._listaNegociacoes.negociacoes.push(this._criaNegociacao());
            this._listaNegociacoes.negociacoes.length = 0;
        // END

        this._limpaFormulario();
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {

        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}