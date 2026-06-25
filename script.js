// Selecao dos elementos que serao controlados no site
const botaoContraste = document.getElementById('botao-contraste');
const botaoAumentar = document.getElementById('botao-aumentar');
const botaoDiminuir = document.getElementById('botao-diminuir');
const corpoPagina = document.body;

// Tamanho inicial da fonte em pixels
let tamanhoFonte Atual = 22;

// Funcao para ligar ou desligar o modo de alto contraste
botaoContraste.addEventListener('click', function() {
    corpoPagina.classList.toggle('alto-contraste');
});

// Funcao para aumentar o tamanho da letra da pagina
botaoAumentar.addEventListener('click', function() {
    if (tamanhoFonteAtual < 40) { // Limite maximo para nao quebrar o desenho da pagina
        tamanhoFonteAtual = tamanhoFonteAtual + 2;
        corpoPagina.style.fontSize = tamanhoFonteAtual + 'px';
    }
});

// Funcao para diminuir o tamanho da letra da pagina
botaoDiminuir.addEventListener('click', function() {
    if (tamanhoFonteAtual > 18) { // Limite minimo para manter o texto legivel
        tamanhoFonteAtual = tamanhoFonteAtual - 2;
        corpoPagina.style.fontSize = tamanhoFonteAtual + 'px';
    }
});