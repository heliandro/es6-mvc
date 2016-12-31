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
    }

    adiciona(event) {

        event.preventDefault();

        let negociacao = new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.dir(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));
    };

}