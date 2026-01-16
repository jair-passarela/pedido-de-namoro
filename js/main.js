const nome = "Angela";
let etapa = 0;
let musicaIniciada = false;
let digitandoInterval = null;
let digitando = false;

function proximo() {
    if (digitando) return;
    const titulo = document.getElementById("titulo");
    const texto = document.getElementById("texto");
    const box = document.querySelector(".box");
    const btn = document.getElementById("btn");
    const musica = document.getElementById("musica");

    if (!musicaIniciada) {
        musica.volume = 0.4;
        musica.play();
        musicaIniciada = true;
    }

    etapa++;

    if (etapa === 1) {
        titulo.innerText = `Angela 💙`;
        texto.innerText = "";
        escreverTexto(
`Você chegou no momento certo da minha vida
e me mostrou como é um amor recíproco.

Como é ser amado de um jeito
tão especial.`
        );
    }

    else if (etapa === 2) {
        texto.innerText = "";
        escreverTexto(
`Eu não tenho palavras para agradecer
a você e a Deus por esse amor,
esse carinho e esse companheirismo.`
        );
    }

    else if (etapa === 3) {
        texto.innerText = "";
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
            <button class="sim" onclick="aceitou()">Sim</button>
            <button class="nao" onclick="fugir(this)">Não</button>
        `;
    }
}

function escreverTexto(textoCompleto) {
    const texto = document.getElementById("texto");

    // Cancela qualquer digitação anterior
    if (digitandoInterval) {
        clearInterval(digitandoInterval);
    }

    texto.innerHTML = "";
    let i = 0;
    digitando = true;

    digitandoInterval = setInterval(() => {
        if (i >= textoCompleto.length) {
            clearInterval(digitandoInterval);
            digitandoInterval = null;
            digitando = false;
            return;
        }

        const caractere = textoCompleto.charAt(i);

        if (caractere === "\n") {
            texto.innerHTML += "<br><br>";
        } else {
            texto.innerHTML += caractere;
        }

        i++;
    }, 40);

}
function fugir(botao) {
    const x = Math.random() * (window.innerWidth - botao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botao.offsetHeight);
    botao.style.left = x + "px";
    botao.style.top = y + "px";
}

function aceitou() {
    document.body.innerHTML = `
        <div class="box">
            <h2>💖 Agora somos oficialmente namorados 💖</h2>
            <p>
Prometo a você esperar o tempo que for
para me casar com você.

Irei sempre te escolher
e não darei brecha
para nenhuma dúvida no meu coração.

Vou sempre cuidar,
orar e zelar por você.

Prometo criar momentos incríveis juntos,
ser seu companheiro
e melhor amigo
para o resto das nossas vidas.

<strong>EU TE AMO</strong>
            </p>
        </div>
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