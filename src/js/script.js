const botoes = document.querySelectorAll('.botoes__botao');
const personagens = document.querySelectorAll('.personagens__personagem');

botoes.forEach((botoes__botao, indice) => {
    botoes__botao.addEventListener("click", () => { // addEventListener só pode ser usado em um elemento por vez, por isso vamos usar forEach, pois ele passa por cada elemento da lista

        desselecionarBotao();
        desselecionarPersonagem();

        botoes__botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagens__personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botoes__botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

