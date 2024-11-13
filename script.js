const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoCasamento = document.querySelector("#botao-casamento");


const perguntas = [
    {
        enunciado: "Qual é a nossa música favorita juntas?",
        alternativas: [
            {
                texto: "Contramão do Gustavo Mioto",
                afirmacao: "A musica Contramão me faz lembrar de todos os momentos especiais que passamos juntas."
            },

            {
                texto: "Garota de Ipanema- Tom Jobim",
                afirmacao : " Não acredito que errou nossa musica Silmara, mas fazer o que, continuo amando você."
            }   
            
        ]
    },
    {
        enunciado: "Qual série nos mais amamos assistir juntas?",
        alternativas: [
            {
                texto: "The Big Bang Theory.",
                afirmacao: " Engraçado que a série The Big Bang Theory era uma de suas séries favoritas e que você me apresentou e assistiu comigo mesmo já tendo assistido, ela nitidamente tem tantas referencias relacionadas a mim mas eu nunca havia cogitado assisti-la, isso me fez pensar nas tantas coisas que você com o tempo acabou fazendo eu me permitir viver, ter e ser, sou tão grata a isso."
            },
            {
                texto: "Atypical",
                afirmacao: " A série Atypical nos assistimos bastante, curtimos, foram bons momentos mesmo não acreditanto que preferiu ela e não clicou em The Big Bang Theory eu gostaria de dizer que continuo amando muito você mas não deu para ser fofinha desta vez."
            }
            
        ]
    }, 
    {
        enunciado: " Qual é o presente mais significativo que você já me deu? ",
        alternativas: [
            {
                texto: "Um lego do castelo de Hogwarts",
                afirmacao: " Esse castelo foi maravilhoso, eu amei monta-lo e adorei a sua dedicação em buscar sozinha o que eu amo para me presentear mesmo não entendendo nada de Harry Potter. Mas sem duvidas o nosso amor na verdade é mais importante e o presente mais lindo que eu recebi de você. Enfim, agora que você respondeu todas as perguntas aqui, eu quero que me responda uma ultima pergunta porém pessoalmente."
            },
            {
                texto: " O amor mais lindo e puro que eu poderia ter.",
                afirmacao: " Ainda bem que sabe que o nosso amor é mais importante e o presente mais lindo que eu recebi de você. Obrigada por tanto e eu quero te amar para sempre. Enfim, agora que você respondeu todas as perguntas aqui, eu quero que me responda uma ultima pergunta porém pessoalmente. "
            }
        ]
    }
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você concluiu o quiz!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    botaoCasamento.style.display = "block"; // Mostrar o botão para revelar a pergunta final
}

botaoCasamento.addEventListener("click", () => {
    caixaPerguntas.textContent = "Você quer casar comigo?";
    textoResultado.textContent = "💍";
    botaoCasamento.style.display = "none"; // Ocultar o botão após revelar a pergunta final
});
mostraPergunta();