// Aguarda a pagina carregar completamente
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona todos os botoes de dicas
    const botoes = document.querySelectorAll(".botao-saber-mais");

    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Encontra o cartao (card-dica) mais proximo do botao clicado
            const card = this.closest(".card-dica");
            
            // Modifica o estilo do cartao para mostrar que foi lido
            card.classList.toggle("lido");
            
            // Muda o texto do botao de forma clara
            if (card.classList.contains("lido")) {
                this.textContent = " Dica Concluida!";
                this.style.backgroundColor = "#2e7d32";
            } else {
                this.textContent = "Entendi esta dica";
                this.style.backgroundColor = "#004687";
            }
        });
    });
});