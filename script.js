// Seleciona os botoes e o corpo do site
const btnAumentar = document.getElementById('btn-aumentar');
const btnDiminuir = document.getElementById('btn-diminuir');
const btnContraste = document.getElementById('btn-contraste');
const corpoPagina = document.body;

// Define o tamanho inicial da letra
let tamanhoFonte = 18;

// Funcao para aumentar a letra ate o limite de 32 pixels
btnAumentar.addEventListener('click', function() {
    if (tamanhoFonte < 32) {
        tamanhoFonte += 2;
        corpoPagina.style.fontSize = tamanhoFonte + 'px';
    }
});

// Funcao para diminuir a letra ate o limite de 14 pixels
btnDiminuir.addEventListener('click', function() {
    if (tamanhoFonte > 14) {
        tamanhoFonte -= 2;
        corpoPagina.style.fontSize = tamanhoFonte + 'px';
    }
});

// Funcao para ligar ou desligar o modo de alto contraste
btnContraste.addEventListener('click', function() {
    corpoPagina.classList.toggle('alto-contraste');
});