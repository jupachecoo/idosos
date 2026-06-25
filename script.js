// Controle do tamanho da fonte

let tamanhoFonte = 18;

// Elementos

const botaoContraste = document.getElementById("botao-contraste");
const botaoAumentar = document.getElementById("botao-aumentar");
const botaoDiminuir = document.getElementById("botao-diminuir");
const botaoAnalisar = document.getElementById("botao-analisar");

const resultado = document.getElementById("resultado");

// Alternar alto contraste

botaoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

// Aumentar letra

botaoAumentar.addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

// Diminuir letra

botaoDiminuir.addEventListener("click", () => {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
});

// Analise simples de golpes

botaoAnalisar.addEventListener("click", () => {

    const mensagem =
        document.getElementById("texto-mensagem")
        .value
        .toLowerCase();

    const palavrasSuspeitas = [
        "pix",
        "premio",
        "urgente",
        "senha",
        "clique aqui",
        "transferencia",
        "ganhou",
        "cartao bloqueado",
        "codigo",
        "banco"
    ];

    let encontrouRisco = false;

    for (let palavra of palavrasSuspeitas) {

        if (mensagem.includes(palavra)) {
            encontrouRisco = true;
            break;
        }
    }

    if (encontrouRisco) {

        resultado.style.backgroundColor = "#ffdddd";
        resultado.style.color = "#990000";

        resultado.innerHTML =
            "ATENCAO: Esta mensagem possui sinais comuns de golpe. Nao informe dados pessoais, senhas ou realize pagamentos sem confirmar a origem.";

    } else {

        resultado.style.backgroundColor = "#ddffdd";
        resultado.style.color = "#006600";

        resultado.innerHTML =
            "Nenhum sinal comum de golpe foi encontrado. Mesmo assim, mantenha cuidado antes de compartilhar informacoes.";
    }
});