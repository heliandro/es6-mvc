class HttpService {

    get(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);

            xhr.onreadystatechange = () => {

                /*
                 0: requisicao ainda nao iniciada

                 1: conexao com o servidor estabelecida

                 2: requisicao recebida

                 3: processando requisicao

                 4: requisicao concluida e a resposta pronta | Obs: pode ser concluida com erro e sua resposta valida = cod 4
                 */

                if(xhr.readyState == 4) {

                    switch(xhr.status) {

                        case 200:
                            console.log('Obtendo as negociacoes do servidor');
                            resolve(JSON.parse(xhr.responseText));
                            break;

                        default:
                            reject(xhr.responseText);
                    }
                }
            };

            xhr.send();
        });
    }

    post(url, dado) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send(JSON.stringify(dado)); // usando JSON.stringifly para converter objeto em uma string no formato JSON.
        });

    }
}