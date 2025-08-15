const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você precisa organizar seu quarto para um evento. O que você faz?",
        alternativas: [
            {
                texto: "Arrumar tudo de uma vez.",
                afirmacao: "Você se sente cansado, mas termina a tempo."
            },
            {
                texto: "Organizar um pouco por dia.",
                afirmacao: "O processo é mais leve, mas exige disciplina."
            }
        ]
    },
    {
        enunciado: " Você quer começar a cozinhar. Qual o primeiro passo?",
        alternativas: [
            {
                texto: "Seguir uma receita simples.",
                afirmacao: "Você tem um resultado rápido e motivador."
            },
            {
                texto: "Comprar todos os ingredientes.",
                afirmacao: "Você se sente preparado, mas ainda não começou."
            }
        ]
    },
    {
        enunciado: "O que fazer em uma tarde livre?",
        alternativas: [
            {
                texto: "Ir ao cinema.",
                afirmacao: "Você se diverte com um filme, relaxando a mente."
            },
            {
                texto: "Fazer uma caminhada.",
                afirmacao: "Você se exercita e aproveita o ar livre."
            }
        ]
    },
    {
        enunciado: "Um novo aplicativo de música oferece recomendações personalizadas. Você se sente surpreso. O que você faz?",
        alternativas: [
            {
                texto: "Aceitar as recomendações.",
                afirmacao: "Você descobre artistas que se encaixam no seu gosto."
            },
            {
                texto: "Ignorar as sugestões.",
                afirmacao: " Você continua ouvindo apenas o que já conhece."
            }
        ]
    },
    {
        enunciado: " Você e seus amigos vão fazer uma viagem de carro. O que levar para o trajeto? ",
        alternativas: [
            {
                texto: "Comidas saudáveis.",
                afirmacao: "Vocês têm energia e disposição durante o caminho."
            },
            {
                texto: " Apenas lanches rápidos.",
                afirmacao: "A comida acaba rápido, e a fome aparece. "
            }
        ]
    },
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
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();