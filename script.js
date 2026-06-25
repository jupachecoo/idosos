// Waits for the page to load completely
document.addEventListener("DOMContentLoaded", function() {
    
    // Selects all tip buttons
    const botoes = document.querySelectorAll(".botao-saber-mais");

    botoes.forEach(function(botao, index) {
        const card = botao.closest(".card-dica");
        const dicaId = "dica_lida_" + index; // Unique ID for each tip card

        // Memory Check: Verification if the user already read this tip in a previous session
        if (localStorage.getItem(dicaId) === "true") {
            card.classList.add("lido");
            botao.textContent = " Tip Completed!";
            botao.style.backgroundColor = "#2e7d32";
        }

        botao.addEventListener("click", function() {
            // Toggles the card's visual state
            card.classList.toggle("lido");
            
            // Updates button text and color based on the current state
            if (card.classList.contains("lido")) {
                this.textContent = " Tip Completed!";
                this.style.backgroundColor = "#2e7d32";
                
                // Saves progress to the browser's local storage
                localStorage.setItem(dicaId, "true");
                
                // Interactive Feedback: Pop-up alert congratulating the user
                alert("Great job! You've marked this security tip as completed.\nStay safe online!");
            } else {
                this.textContent = "I understand this tip";
                this.style.backgroundColor = "#004687";
                
                // Clears memory for this specific card if uncompleted
                localStorage.removeItem(dicaId);
            }
        });
    });
});