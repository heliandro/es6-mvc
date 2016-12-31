// Import e Exports ainda nao suportados nos navegadores - 18/12/2016
// export class DateHelper..

class DateHelper {

    // Em JavaScript nao é necessario instanciar uma classe para usar os métodos estaticos.
    static dataParaTexto(data) {
        return data.getDate()
            + '/' + (data.getMonth() + 1)
            + '/' + data.getFullYear();
    }

    static textoParaData(texto) {
        return new Date(
            ...texto
                .split('/')
                .reverse()
                .map((item, indice) => item - indice % 2)
        );
    }
}