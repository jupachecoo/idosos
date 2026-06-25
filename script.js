// Waits for the page to load completely
document.addEventListener("DOMContentLoaded", function() {
    
    // Selects all tip buttons
    const botoes = document.querySelectorAll(".botao-saber-mais");

    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
            // Finds the card (card-dica) closest to the clicked button
            const card = this.closest(".card-dica");
            
            // Modifies the card style to show it has been read
            card.classList.toggle("lido");
            
            // Changes the button text clearly
            if (card.classList.contains("lido")) {
                this.textContent = " Tip Completed!";
                this.style.backgroundColor = "#2e7d32";
            } else {
                this.textContent = "I understand this tip";
                this.style.backgroundColor = "#004687";
                document.addEventListener("DOMContentLoaded", function() {
            })
        });
    });
});