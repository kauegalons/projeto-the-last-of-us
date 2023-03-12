/*
    quando clicarmos no botao, mostrar a imagem selecionada
    - passo 1 - dar um jeito de pegar o elemento HTML dos botões
    - passo 2 - dar um jeito de identificar o clique do usuário no botão
    - passo 3 - desmarcar o botão selecionado anterior
    - passo 4 - marcar o botão clicado como se estivesse selecionada
    - passo 5 - esconder a imagem ativa de fundo anterior
    - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/

//passo 1
const botoesCarrosel = document.querySelectorAll('.botao');
//passo 6
const imagens = document.querySelectorAll('.imagem');

//passo 2
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        //passo 3
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
        
        //passso 4
        botao.classList.add('selecionado');

        //passo 5
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //passo 6
        imagens[indice].classList.add('ativa');
    })
})