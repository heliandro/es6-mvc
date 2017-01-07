// Import e Exports ainda nao suportados nos navegadores - 18/12/2016
// export class DateHelper..

class DateHelper {

    constructor() {

        throw new Error('Voce nao pode criar uma instancia dessa classe =P');
    }

    // Em JavaScript nao é necessario instanciar uma classe para usar os métodos estaticos.
    static dataParaTexto(data) {

        return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        if(/ˆ\d{4}-\d{2}-\d{2}$/.test(texto))
            throw new Error('A data deve estar no formato aaaa-mm-dd');

        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
    }
}