// Vanilla JavaScript - Ecmascript 5.1
// Problemas: Apresentacao e Logica juntos.

var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

console.log(campos);

var tbody = document.querySelector('#tabela tbody');

document.querySelector('form').addEventListener('submit', function (event) {

    // nao submeter o formulario
    event.preventDefault();

    // tr -> linha
    var tr = document.createElement('tr');

    // td -> colunas
    campos.forEach(function (campo) {
       var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    // finaliza a linha -> insere em tbody...
    tbody.appendChild(tr);
    console.log(tbody);

    // limpa os campos
    campos[0] = '';
    campos[1] = 1;
    campos[2] = 1.0;

    campos[0].focus();

});