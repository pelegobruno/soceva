/******para o meno app */
function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('active');
        }





        /******buscador de informações la da temporada */

        async function carregarTemporada() {
            try {
                // Busca o HTML da temporada
                const response = await fetch('temporada.html');
                const html = await response.text();
        
                // Cria um elemento temporário para processar o HTML
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
        
                // Obtém a tabela da temporada
                const tabelaJogos = doc.getElementById('tabela-jogadores');
        
                if (!tabelaJogos) {
                    console.error('Tabela de temporada não encontrada!');
                    return;
                }
        
                const linhas = tabelaJogos.getElementsByTagName('tr');
        
                let vitorias = 0;
                let derrotas = 0;
                let empates = 0;
                let golsFeitos = 0;
                const goleadores = {};
        
                for (let i = 1; i < linhas.length; i++) { // Ignorar cabeçalho
                    const celulas = linhas[i].getElementsByTagName('td');
                    if (celulas.length > 0) {
                        // 🏆 Captura o placar corretamente
                        const jogoTexto = celulas[2].innerHTML;
                        const placarMatch = jogoTexto.match(/(\d+) x (\d+)/);
                        if (!placarMatch) continue; // Pula se não encontrar placar válido
                        
                        const golsCeva = parseInt(placarMatch[1]);
                        const golsAdversario = parseInt(placarMatch[2]);
        
                        // Contabiliza gols feitos
                        golsFeitos += golsCeva;
        
                        // Contabiliza vitórias, derrotas e empates
                        if (golsCeva > golsAdversario) {
                            vitorias++;
                        } else if (golsCeva < golsAdversario) {
                            derrotas++;
                        } else {
                            empates++;
                        }
        
                        // 📌 Captura os goleadores corretamente
                        const golsList = celulas[4].getElementsByTagName('li');
                        for (let j = 0; j < golsList.length; j++) {
                            const goleadorInfo = golsList[j].innerText.match(/(.*?) - (\d+) gol/);
                            if (!goleadorInfo) continue;
        
                            const jogador = goleadorInfo[1].trim();
                            const quantidadeGols = parseInt(goleadorInfo[2]);
        
                            // Soma os gols do jogador
                            goleadores[jogador] = (goleadores[jogador] || 0) + quantidadeGols;
                        }
                    }
                }
        
                // Atualiza o dashboard da aba Início
                document.getElementById('vitorias-inicio').textContent = vitorias;
                document.getElementById('derrotas-inicio').textContent = derrotas;
                document.getElementById('empates-inicio').textContent = empates;
                document.getElementById('gols-feitos-inicio').textContent = golsFeitos;
        
                // Atualiza a tabela de goleadores
                const goleadoresListaInicio = document.getElementById('goleadores-lista-inicio');
                goleadoresListaInicio.innerHTML = ''; // Limpa a lista anterior
        
                for (const [jogador, gols] of Object.entries(goleadores)) {
                    const novaLinha = document.createElement('tr');
                    novaLinha.innerHTML = `<td>${jogador}</td><td>${gols}</td>`;
                    goleadoresListaInicio.appendChild(novaLinha);
                }
            } catch (error) {
                console.error('Erro ao carregar os dados da temporada:', error);
            }
        }
        
        // Chama a função ao carregar a página
        window.onload = function() {
            carregarTemporada();
        };
















        /******buscador de informações la da temporada */







        // Configuração do Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inicializar o Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Obter o token para notificações
document.getElementById('subscribe').addEventListener('click', async () => {
    try {
        const token = await messaging.getToken({ vapidKey: "BDoepgtf1BRX2755v1uN50Hb5Zwtsu76FI8YoYwNPrlXxmR2Kzhbz7ucfk-B9ycOyPs5vuwedzNu0jPooDAd0nY" });
        console.log("Token de registro:", token);
    } catch (error) {
        console.error("Erro ao obter o token:", error);
    }
});