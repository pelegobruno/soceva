const jogadores = [
    // Técnico
    {
        nome: "Jeferson",
        imagem: "https://i.ibb.co/C88y09g/Jeferson-removebg-preview.png", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "TEC", // Técnico
        estatisticas: { MOT: 90, TAT: 85, ORI: 88 },
        tipo: "tecnico"
    },
    // Goleiros
    {
        nome: "Marcinho",
        imagem: "https://example.com/marcinho.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 20,
        posicao: "GK", // Goleiro
        estatisticas: { DIV: 75, REF: 70, HAN: 72, SPE: 65, KIC: 68, POS: 74 },
        tipo: "goleiro"
    },
    {
        nome: "André",
        imagem: "https://example.com/andre.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 1,
        posicao: "GK", // Goleiro
        estatisticas: { DIV: 80, REF: 75, HAN: 78, SPE: 66, KIC: 70, POS: 76 },
        tipo: "goleiro"
    },
    // Jogadores de linha
    {
        nome: "Cassius",
        imagem: "https://example.com/cassius.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "MC", // Atacante
        estatisticas: { RIT: 80, DRI: 75, FIN: 78, PAS: 80, DEF: 60, FIS: 70 },
        tipo: "jogador"
    },
    {
        nome: "Lucca",
        imagem: "https://example.com/lucca.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 10,
        posicao: "ALE", // Meio-Campo
        estatisticas: { RIT: 82, DRI: 80, FIN: 76, PAS: 77, DEF: 62, FIS: 72 },
        tipo: "jogador"
    },
    {
        nome: "Duca",
        imagem: "https://example.com/duca.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 8,
        posicao: "MC", // Meio-Campo
        estatisticas: { RIT: 75, DRI: 78, FIN: 74, PAS: 75, DEF: 65, FIS: 68 },
        tipo: "jogador"
    },
    {
        nome: "Alex",
        imagem: "https://example.com/alex.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 12,
        posicao: "CB", // Centro-Baixo
        estatisticas: {
            RIT: 80,
            DRI: 78,
            FIN: 76,
            PAS: 75,
            DEF: 65,
            FIS: 72
        },
        tipo: "jogador"
    },
    {
        nome: "Everton",
        imagem: "https://example.com/everton.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 14,
        posicao: "CB", // Atacante
        estatisticas: { RIT: 76, DRI: 79, FIN: 75, PAS: 74, DEF: 64, FIS: 70 },
        tipo: "jogador"
    },
    {
        nome: "Guga",
        imagem: "https://example.com/guga.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 9,
        posicao: "ATK", // Defensor
        estatisticas: { RIT: 78, DRI: 80, FIN: 72, PAS: 73, DEF: 61, FIS: 69 },
        tipo: "jogador"
    },
    {
        nome: "Pandinha",
        imagem: "https://i.ibb.co/wpVkFRV/PANDINHA-PNG.png", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "ATK", // Atacante
        estatisticas: { RIT: 74, DRI: 77, FIN: 70, PAS: 72, DEF: 60, FIS: 65 },
        tipo: "jogador"
    },
    {
        nome: "Igor",
        imagem: "https://example.com/igor.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "", // Defensor
        estatisticas: { RIT: 76, DRI: 75, FIN: 74, PAS: 71, DEF: 62, FIS: 68 },
        tipo: "jogador"
    },
    {
        nome: "Cassiano",
        imagem: "https://example.com/cassiano.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 13,
        posicao: "ATK", // Defensor
        estatisticas: { RIT: 78, DRI: 76, FIN: 75, PAS: 73, DEF: 60, FIS: 67 },
        tipo: "jogador"
    },
    {
        nome: "Roberth",
        imagem: "https://i.ibb.co/2NY4FD4/ROBERTH-PNG.png", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "ALD", // Defensor
        estatisticas: { RIT: 78, DRI: 76, FIN: 75, PAS: 73, DEF: 60, FIS: 67 },
        tipo: "jogador"
    },
    {
        nome: "Pelego",
        imagem: "https://i.ibb.co/wNZbZgd/Pelego-removebg-preview.png", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: 11,
        posicao: "ATK", // Atacante
        estatisticas: { RIT: 75, DRI: 74, FIN: 72, PAS: 70, DEF: 65, FIS: 66 },
        tipo: "jogador"
    },
    {
        nome: "Drinho",
        imagem: "https://example.com/drinho.jpg", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "MC", // Meio-Campo
        estatisticas: { RIT: 73, DRI: 75, FIN: 71, PAS: 69, DEF: 62, FIS: 64 },
        tipo: "jogador"
    },
    {
        nome: "Robson",
        imagem: "https://i.ibb.co/Vmm2D3k/ROBSON-PNG.png", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "DEF", // Defensor
        estatisticas: { RIT: 74, DRI: 76, FIN: 70, PAS: 72, DEF: 64, FIS: 67 },
        tipo: "jogador"
    },
    {
        nome: "Thiago",
        imagem: "https://i.ibb.co/6N8Gm7K/Thiago-removebg-preview.png", // Substituir com a imagem real
        escudoClube: "assets/image/logo/SO CEVA.png",
        numero: null,
        posicao: "ALD", // Defensor
        estatisticas: { RIT: 75, DRI: 78, FIN: 73, PAS: 75, DEF: 63, FIS: 66 },
        tipo: "jogador"
    }
    
];

const cartasContainer = document.getElementById("cartas-container");

jogadores.forEach(jogador => {
    const cartaDiv = document.createElement("div");
    cartaDiv.className = "carta";

    // Adiciona classe específica para goleiros e treinador
    if (jogador.tipo === "goleiro") {
        cartaDiv.classList.add("carta-goleiro");
    } else if (jogador.tipo === "tecnico") {
        cartaDiv.classList.add("carta-treinador");
    }
    
    // Adiciona o evento de clique
    cartaDiv.addEventListener("click", () => {
        // Remove a classe de destaque de todas as cartas
        document.querySelectorAll(".carta").forEach(carta => {
            carta.classList.remove("destacado");
        });
        // Adiciona a classe de destaque à carta clicada
        cartaDiv.classList.add("destacado");
    });

    cartaDiv.innerHTML = `
        <span class="posicao">${jogador.posicao}</span>
        <img src="${jogador.imagem}" class="imagem-jogador">
        <div class="carta-info">
            <img src="${jogador.escudoClube}" class="escudo">
            <span class="nome">${jogador.nome}</span>
            ${jogador.numero ? `<span class="numero">${jogador.numero}</span>` : ''}
        </div>
        <div class="estatisticas">
            ${jogador.tipo === "goleiro" ? `
                <div><span>DIV</span> <strong>${jogador.estatisticas.DIV}</strong></div>
                <div><span>REF</span> <strong>${jogador.estatisticas.REF}</strong></div>
                <div><span>HAN</span> <strong>${jogador.estatisticas.HAN}</strong></div>
                <div><span>SPE</span> <strong>${jogador.estatisticas.SPE}</strong></div>
                <div><span>KIC</span> <strong>${jogador.estatisticas.KIC}</strong></div>
                <div><span>POS</span> <strong>${jogador.estatisticas.POS}</strong></div>
            ` : jogador.tipo === "jogador" ? `
                <div><span>RIT</span> <strong>${jogador.estatisticas.RIT}</strong></div>
                <div><span>DRI</span> <strong>${jogador.estatisticas.DRI}</strong></div>
                <div><span>FIN</span> <strong>${jogador.estatisticas.FIN}</strong></div>
                <div><span>PAS</span> <strong>${jogador.estatisticas.PAS}</strong></div>
                <div><span>DEF</span> <strong>${jogador.estatisticas.DEF}</strong></div>
                <div><span>FIS</span> <strong>${jogador.estatisticas.FIS}</strong></div>
            ` : jogador.tipo === "tecnico" ? `
                <div><span>MOT</span> <strong>${jogador.estatisticas.MOT}</strong></div>
                <div><span>TAT</span> <strong>${jogador.estatisticas.TAT}</strong></div>
                <div><span>ORI</span> <strong>${jogador.estatisticas.ORI}</strong></div>
            ` : ''}
        </div>
    `;
    cartasContainer.appendChild(cartaDiv);
});









//////*BAIXAR APP*******************/
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById("installBtn").style.display = "block";
});

document.getElementById("installBtn").addEventListener("click", () => {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
            console.log("Usuário aceitou a instalação");
        }
        deferredPrompt = null;
    });
});
