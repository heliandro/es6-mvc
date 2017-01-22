class ProxyFactory {

    static create(objeto, props, acao) {

        return new Proxy(objeto, {

            // para interceptar métodos
            get(target, prop, receiver) {

                if(props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {

                    // nao pode ser arrow function...precisa do this dinamico | substitui o metodo adiciona e/ou esvazia..
                    return function () {

                        console.log(`interceptado ${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    }
                }

                return Reflect.get(target, prop, receiver);
            },

            // para interceptar propriedades/alterando propriedades
            set(target, prop, value, receiver) {

                let retorno = Reflect.set(target, prop, value, receiver);
                if(props.includes(prop)) acao(target); // so executa acao(target) se for uma prop monitorada

                return retorno;
            }
        });
    }

    static _ehFuncao(func) {
        return typeof(func) == typeof(Function);
    }
}