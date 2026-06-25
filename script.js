// Aguarda carregamento completo da pagina

document.addEventListener("DOMContentLoaded", function () {

    // Controle do tamanho da fonte

    let tamanhoFonte =
        Number(localStorage.getItem("tamanhoFonte")) || 20;

    document.body.style.fontSize =
        tamanhoFonte + "px";

    // Elementos

    const botaoContraste =
        document.getElementById("botao-contraste");

    const botaoAumentar =
        document.getElementById("botao-aumentar");

    const botaoDiminuir =
        document.getElementById("botao-diminuir");

    const botaoAnalisar =
        document.getElementById("botao-analisar");

    const botaoAvaliar =
        document.getElementById("botao-avaliar");

    const resultado =
        document.getElementById("resultado");

    const resultadoRisco =
        document.getElementById("resultado-risco");

    // Recupera contraste salvo

    if (localStorage.getItem("contraste") === "ativo") {
        document.body.classList.add("alto-contraste");
    }

    // Botao contraste

    botaoContraste.addEventListener("click", function () {

        document.body.classList.toggle("alto-contraste");

        if (document.body.classList.contains("alto-contraste")) {
            localStorage.setItem("contraste", "ativo");
        } else {
            localStorage.removeItem("contraste");
        }

    });

    // Aumentar letra

    botaoAumentar.addEventListener("click", function () {

        tamanhoFonte += 2;

        document.body.style.fontSize =
            tamanhoFonte + "px";

        localStorage.setItem(
            "tamanhoFonte",
            tamanhoFonte
        );

    });

    // Diminuir letra

    botaoDiminuir.addEventListener("click", function () {

        if (tamanhoFonte > 14) {

            tamanhoFonte -= 2;

            document.body.style.fontSize =
                tamanhoFonte + "px";

            localStorage.setItem(
                "tamanhoFonte",
                tamanhoFonte
            );
        }

    });

    // Detector de golpes

    botaoAnalisar.addEventListener("click", function () {

        const texto =
            document
            .getElementById("texto-mensagem")
            .value
            .toLowerCase();

        const palavrasSuspeitas = [

            "pix",
            "urgente",
            "premio",
            "ganhou",
            "senha",
            "codigo",
            "transferencia",
            "clique aqui",
            "cartao bloqueado",
            "banco",
            "deposito",
            "dinheiro"

        ];

        let risco = 0;

        palavrasSuspeitas.forEach(function (palavra) {

            if (texto.includes(palavra)) {
                risco++;
            }

        });

        if (risco >= 2) {

            resultado.style.background = "#ffd6d6";
            resultado.style.color = "#990000";

            resultado.innerHTML =
                "ALERTA: Foram encontrados varios sinais comuns de golpe. Nao envie dinheiro e confirme as informacoes antes de agir.";

        } else if (risco === 1) {

            resultado.style.background = "#fff4cc";
            resultado.style.color = "#996600";

            resultado.innerHTML =
                "CUIDADO: Existe um possivel sinal de golpe. Verifique a origem da mensagem.";

        } else {

            resultado.style.background = "#dfffdc";
            resultado.style.color = "#006600";

            resultado.innerHTML =
                "Nenhum sinal comum foi encontrado. Mesmo assim mantenha a atencao.";

        }

    });

    // Avaliador de risco

    botaoAvaliar.addEventListener("click", function () {

        const perguntas =
            document.querySelectorAll(".pergunta-risco");

        let total = 0;

        perguntas.forEach(function (item) {

            if (item.checked) {
                total++;
            }

        });

        if (total >= 3) {

            resultadoRisco.style.background =
                "#ffd6d6";

            resultadoRisco.style.color =
                "#990000";

            resultadoRisco.innerHTML =
                "RISCO ALTO. Existe grande chance de tentativa de golpe.";

        } else if (total >= 1) {

            resultadoRisco.style.background =
                "#fff4cc";

            resultadoRisco.style.color =
                "#996600";

            resultadoRisco.innerHTML =
                "RISCO MEDIO. Verifique todas as informacoes antes de agir.";

        } else {

            resultadoRisco.style.background =
                "#dfffdc";

            resultadoRisco.style.color =
                "#006600";

            resultadoRisco.innerHTML =
                "RISCO BAIXO. Nenhum sinal importante foi identificado.";

        }

    });

});