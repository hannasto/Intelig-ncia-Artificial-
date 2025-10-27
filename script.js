const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// NOVO CONTEXTO: Exploração Espacial e Sustentabilidade em Marte
const perguntas = [
    {
        enunciado: "Após aterrissar em Marte, a primeira decisão é sobre a localização do habitat inicial. Você tem duas opções: um vale rico em gelo de água, mas exposto a tempestades de poeira, ou uma caverna mais segura, mas com menos acesso imediato à água. Qual você escolhe?",
        alternativas: [
            {
                texto: "Escolher o vale para acesso rápido à água.",
                afirmacao: "Você priorizou o acesso à água, assumindo o risco das tempestades. "
            },
            {
                texto: "Escolher a caverna para máxima proteção.",
                afirmacao: "Você priorizou a segurança do habitat, desenvolvendo tecnologia para buscar água. "
            }
        ]
    },
    {
        enunciado: "A colônia precisa de uma fonte de energia confiável. Você pode investir em painéis solares (efetivos durante o dia, mas vulneráveis à poeira) ou em um reator nuclear de pequena escala (altamente eficiente, mas com risco de falha e radiação). Qual a sua escolha?",
        alternativas: [
            {
                texto: "Instalar uma rede extensa de painéis solares.",
                afirmacao: "A colônia focou em energia solar, incentivando a inovação em limpeza de painéis e armazenamento de energia. "
            },
            {
                texto: "Construir o mini-reator nuclear.",
                afirmacao: "A colônia obteve energia constante com o reator, dedicando grandes recursos à segurança e monitoramento de radiação. "
            }
        ]
    },
    {
        enunciado: "O suprimento de alimentos é crítico. Você opta por um sistema de cultivo hidropônico fechado e totalmente automatizado (máxima eficiência, dependente de tecnologia) ou um sistema de agricultura em solo marciano modificado, com menos automação (mais trabalho manual, menos dependência tecnológica)?",
        alternativas: [
            {
                texto: "Sistema hidropônico automatizado.",
                afirmacao: "A alta produtividade do sistema hidropônico garantiu a nutrição, mas a colônia se tornou altamente dependente de técnicos em automação. "
            },
            {
                texto: "Agricultura em solo modificado.",
                afirmacao: "A colônia estabeleceu uma cultura de trabalho no campo e autossuficiência, valorizando a biologia e a química do solo. "
            }
        ]
    },
    {
        enunciado: "Um veículo de exploração não tripulado avariou-se longe da base. O resgate manual levaria semanas. Você usa a única unidade de reparo robótico (deixa a base desprotegida) ou aborta a missão do veículo (perda de dados valiosos e recursos)?",
        alternativas: [
            {
                texto: "Enviar a unidade de reparo robótico.",
                afirmacao: "O risco valeu a pena; o robô recuperou o veículo e trouxe dados cruciais, destacando a importância da robótica. "
            },
            {
                texto: "Abortar a missão e focar em novos veículos.",
                afirmacao: "A prioridade foi a segurança da base e a preservação de recursos essenciais, levando a um desenvolvimento mais cauteloso de novas tecnologias. "
            }
        ]
    },
    {
        enunciado: "Um grupo de colonos propõe mudar o foco da colônia: de mera sobrevivência para um rápido avanço tecnológico. Isso significa cortar o orçamento de manutenção de infraestrutura para investir em pesquisa de propulsão interestelar. O que você decide?",
        alternativas: [
            {
                texto: "Manter o foco na infraestrutura e sobrevivência básica.",
                afirmacao: "A estabilidade e longevidade da colônia foram asseguradas, estabelecendo um legado de gestão de recursos e sustentabilidade. "
            },
            {
                texto: "Investir pesadamente em propulsão interestelar.",
                afirmacao: "Com a aposta em tecnologia de ponta, a colônia de Marte se tornou um polo de inovação, liderando a exploração do sistema solar. "
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
    // Modificado para um título mais temático
    caixaPerguntas.textContent = "Decisão " + (atual + 1) + ": " + perguntaAtual.enunciado; 
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
    historiaFinal += afirmacoes + " "; // Constrói a crônica
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Crônica do Fundador (Marte, Ano 20):";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();