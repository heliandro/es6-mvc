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
        this._ordemAtual = '';

        // data binding
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView(poison('#negociacoesView')),
            'adiciona', 'esvazia', 'ordena', 'inverteOrdem'
        );

        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView(poison('#mensagemView')),
            'texto'
        );

    }

    adiciona(event) {

        event.preventDefault();

        try {
            this._listaNegociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociacao adicionada com sucesso!';
            this._limpaFormulario();
        } catch(erro) {
            this._mensagem.texto = erro;
        }
    }

    importaNegociacoes() {

        let service = new NegociacaoService();

        service
            .obterNegociacoes()
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = 'Negociacoes do periodo importadas'
            }))
            .catch(erro => this._mensagem.texto = erro);

        // Promise.all([
        //     service.obterNegociacoesDaSemana(),
        //     service.obterNegociacoesDaSemanaAnterior(),
        //     service.obterNegociacoesDaSemanaRetrasada()]
        // ).then(negociacoes => {
        //     console.log(negociacoes);
        //     negociacoes
        //         .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
        //         .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
        //     this._mensagem.texto = 'Negociacoes importadas com sucesso';
        // })
        // .catch(erro => this._mensagem.texto = erro);
    }

    ordena(coluna) {

        if(this._ordemAtual == coluna)
            this._listaNegociacoes.inverteOrdem();
        else
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);

        this._ordemAtual = coluna;
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociacoes apagadas com sucesso!';
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