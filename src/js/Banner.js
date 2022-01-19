/*
Quando clicar nas setas do banner para avançar as 
imagens serão escondidas e a imagem a seguir sera mostrada


Pegar todas as imagens usando o DOM e remover a classe mostrar
*/

const imagensBanner = document.querySelectorAll('.img-banner');  /* com o const nenhuma variavel terá o valor alterado / todos os elementos da classe 
img serão recebidos pela const imagens*/
const setaAvancar = document.getElementById('btn-avancar');/*pegar os elementos pelo ID*/
const setaVoltar = document.getElementById('btn-voltar');/*pegar os elementos pelo ID*/
let imagemAtual = 0; /* com o LET a variavel terá o valor alterado*/ /*Imagem Atual começa em 0*/

function mostrarImagem() {
    imagensBanner[imagemAtual].classList.add('mostrar');
}


function esconderImagens() {
    imagensBanner.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

setaAvancar.addEventListener('click', function () { /*Adicionar um evento de click*/ /*e chamar a função em seguida do que vai acontecer após o click */
    //testa se o contador da imagem atual é igual ao total de imagens se for igual ele para de avançar
    const totalDeImagens = imagensBanner.length - 1;
    if (imagemAtual === imagensBanner.length - 1) {

        return;

    }

    imagemAtual++; /* Imagem Atual ganha o valor de 1*/
    esconderImagens();
    mostrarImagem();  /*Exibe a classe MOSTRAR*/
});

setaVoltar.addEventListener('click', function () {

    if (imagemAtual === 0) {

        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagem();
})
