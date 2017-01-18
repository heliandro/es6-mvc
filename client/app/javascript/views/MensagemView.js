class MensagemView extends View {

    // constructor(elemento) {
    //     super(elemento);
    // }

    //@Override
    template(model) {
        return model.texto ? `<p class="">${model.texto}</p>` : '';
    }

}