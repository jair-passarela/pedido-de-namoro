const nome = "Angela";
let etapa = 0;
let musicaIniciada = false;
let digitando = false;
let intervaloDigitacao = null;

function proximo() {
    if (digitando) return;

    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");
    const box = document.querySelector(".box");
    const musica = document.getElementById("musica");

    if (!musicaIniciada) {
        musica.volume = 0.4;
        musica.play();
        musicaIniciada = true;
    }

    etapa++;

    if (etapa === 1) {
        titulo.innerText = `${nome} 💙`;
        escreverTexto(
`Você chegou no momento certo da minha vida
e me mostrou como é um amor recíproco.

Como é ser amado
de um jeito tão especial.`
        );
    }

    else if (etapa === 2) {
        escreverTexto(
`Eu não tenho palavras para agradecer
a você e a Deus
por esse amor, esse carinho
e esse companheirismo.`
        );
    }

    else if (etapa === 3) {
        escreverTexto(
`Então deixo esse pequeno projeto
para te pedir algo
que vai mudar a minha vida.`
        );
    }

    else if (etapa === 4) {
        titulo.innerText = "Analisando compatibilidade...";
        texto.innerText = "Processando dados emocionais 💭";
    }

    else if (etapa === 5) {
        titulo.innerText = "Resultado encontrado ✅";
        texto.innerText = "Compatibilidade: 100%\nConclusão: impossível ignorar.";
    }

    else if (etapa === 6) {
        box.innerHTML = `
            <h2>Pergunta final 💙</h2>
            <p>Você aceita namorar comigo?</p>

            <div class="botoes">
                <button class="sim" onclick="aceitou()">Sim</button>
                <button class="nao" onclick="fugir(this)">Não</button>
            </div>
        `;
    }
}

function escreverTexto(textoCompleto) {
    const texto = document.getElementById("texto");

    if (intervaloDigitacao) clearInterval(intervaloDigitacao);

    texto.innerHTML = "";
    let i = 0;
    digitando = true;

    intervaloDigitacao = setInterval(() => {
        if (i >= textoCompleto.length) {
            clearInterval(intervaloDigitacao);
            digitando = false;
            return;
        }

        const char = textoCompleto.charAt(i);
        texto.innerHTML += char === "\n" ? "<br><br>" : char;
        i++;
    }, 40);
}

function fugir(botao) {
    const container = botao.parentElement;

    const paddingTop = 90; // área protegida do SIM
    const maxX = container.offsetWidth - botao.offsetWidth;
    const maxY = container.offsetHeight - botao.offsetHeight;

    let x = Math.random() * maxX;
    let y = paddingTop + Math.random() * (maxY - paddingTop);

    // pulo MAIS longo
    if (Math.abs(botao.offsetLeft - x) < 120) {
        x = (x + maxX * 0.7) % maxX;
    }

    if (Math.abs(botao.offsetTop - y) < 90) {
        y = paddingTop + ((y + maxY * 0.7) % (maxY - paddingTop));
    }

    botao.style.left = x + "px";
    botao.style.top = y + "px";
}


function aceitou() {
    const box = document.querySelector(".box");

    box.innerHTML = `
        <h2>💖 Agora somos oficialmente namorados 💖</h2>
        <p>
Prometo esperar o tempo que for
para me casar com você.

Sempre te escolher,
cuidar, orar e zelar por você.

Prometo criar momentos incríveis juntos,
ser seu companheiro
e melhor amigo
para o resto das nossas vidas.

<strong>EU TE AMO ❤️</strong>
        </p>
    `;

    iniciarCoracoes();
}

function iniciarCoracoes() {
    setInterval(() => {
        const coracao = document.createElement("div");
        coracao.className = "coracao";
        coracao.innerText = "❤️";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.fontSize = (Math.random() * 12 + 16) + "px";
        document.body.appendChild(coracao);

        setTimeout(() => coracao.remove(), 4000);
    }, 250);
}
