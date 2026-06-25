document.addEventListener("DOMContentLoaded", function(){

    let tamanhoFonte = 20;

    const botaoContraste =
    document.getElementById("botao-contraste");

    const botaoAumentar =
    document.getElementById("botao-aumentar");

    const botaoDiminuir =
    document.getElementById("botao-diminuir");

    const botaoAnalisar =
    document.getElementById("botao-analisar");

    const resultado =
    document.getElementById("resultado");

    // Alto contraste

    botaoContraste.addEventListener("click", function(){

        document.body.classList.toggle("alto-contraste");

    });

    // Aumentar fonte

    botaoAumentar.addEventListener("click", function(){

        tamanhoFonte += 2;

        document.body.style.fontSize =
        tamanhoFonte + "px";

    });

    // Diminuir fonte

    botaoDiminuir.addEventListener("click", function(){

        if(tamanhoFonte > 14){

            tamanhoFonte -= 2;

            document.body.style.fontSize =
            tamanhoFonte + "px";
        }

    });

    // Detector de golpes

    botaoAnalisar.addEventListener("click", function(){

        const texto =
        document.getElementById("texto-mensagem")
        .value
        .toLowerCase();

        const palavrasSuspeitas = [

            "pix",
            "urgente",
            "premio",
            "ganhou",
            "senha",
            "clique aqui",
            "transferencia",
            "codigo",
            "cartao bloqueado",
            "banco"

        ];

        let risco = false;

        for(let palavra of palavrasSuspeitas){

            if(texto.includes(palavra)){

                risco = true;
                break;
            }
        }

        if(risco){

            resultado.style.background =
            "#ffdddd";

            resultado.style.color =
            "#990000";

            resultado.innerHTML =
            "ATENCAO. Esta mensagem possui indicios comuns de golpe. Nao envie dinheiro, nao informe senhas e confirme as informacoes com alguem de confianca.";

        }else{

            resultado.style.background =
            "#ddffdd";

            resultado.style.color =
            "#006600";

            resultado.innerHTML =
            "Nenhum indicio comum de golpe foi encontrado. Mesmo assim mantenha a atencao.";
        }

    });

});