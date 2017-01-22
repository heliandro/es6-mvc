class NegociacoesView extends View {

    // constructor(elemento) {
    //     super(elemento);
    // }

    //@Override
    template(model) {
        return `
            <table id="tabela" class="highlight responsive-table">
                <thead>
                    <tr>
                        <th onclick="negociacaoController.ordena('data')">Data</th>
                        <th onclick="negociacaoController.ordena('quantidade')">Quantidade</th>
                        <th onclick="negociacaoController.ordena('valor')">Valor</th>
                        <th onclick="negociacaoController.ordena('volume')">Volume</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        model.negociacoes.map(n =>
                            `
                                <tr>
                                    <td>${DateHelper.dataParaTexto(n.data)}</td>
                                    <td>${n.quantidade}</td>
                                    <td>${n.valor}</td>
                                    <td>${n.volume}</td>
                                </tr>
                            `
                        ).join('')
                    }
                </tbody>
                <tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                    </td>
                </tfoot>
            </table>        
        `;
    }

}
