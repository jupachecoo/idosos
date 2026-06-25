// Selecionando os botoes do HTML atraves dos seus IDs
const botaoAumentar = document.getElementById('botao-aumentar-letra');
const botaoDiminuir = document.getElementById('botao-diminuir-letra');
const botaoContraste = document.getElementById('botao-alto-contraste');
const corpoDaPagina = document.body;

// Definindo o tamanho inicial da letra (em pixels)
let tamanhoAtualDaLetra = 18;
const tamanhoMaximo = 30; // Limite para nao quebrar o visual da pagina
const tamanhoMinimo = 14; // Limite para nao ficar pequeno demais

// Funcao para aumentar a letra
botaoAumentar.addEventListener('click', function() {
    if (tamanhoAtualDaLetra < tamanhoMaximo) {
        tamanhoAtualDaLetra += 2; // Aumenta de 2 em 2 pixels
        corpoDaPagina.style.fontSize = tamanhoAtualDaLetra + 'px';
    }
});

// Funcao para diminuir a letra
botaoDiminuir.addEventListener('click', function() {
    if (tamanhoAtualDaLetra > tamanhoMinimo) {
        tamanhoAtualDaLetra -= 2; // Diminui de 2 em 2 pixels
        corpoDaPagina.style.fontSize = tamanhoAtualDaLetra + 'px';
    }
});

// Funcao para ativar e desativar o Alto Contraste
botaoContraste.addEventListener('click', function() {
    // O 'toggle' adiciona a classe se ela nao existir, e remove se ela ja existir
    corpoDaPagina.classList.toggle('alto-contraste');
});