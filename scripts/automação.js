/******para o meno app */
function toggleMenu() {
            const menu = document.getElementById('menu');
            menu.classList.toggle('active');
        }



        

                      //ativação do card ficar grandeda temporada
                      document.querySelectorAll('#tabela-jogadores tbody tr').forEach(row => {
                        row.addEventListener('click', function() {
                            const data = this.cells[0].innerText;
                            const hora = this.cells[1].innerText;
                            const jogo = this.cells[2].innerText;
                            const local = this.cells[3].innerText;
                            const gols = this.cells[4].innerText;
                    
                            document.getElementById('modal-data').innerText = `Data: ${data}`;
                            document.getElementById('modal-hora').innerText = `Hora: ${hora}`;
                            document.getElementById('modal-jogo').innerText = jogo;
                            document.getElementById('modal-local').innerText = `Local: ${local}`;
                            document.getElementById('modal-gols').innerText = `Gols: ${gols}`;
                            
                            document.getElementById('modal').style.display = 'block';
                        });
                    });
                    
                    function closeModal() {
                        document.getElementById('modal').style.display = 'none';
                    }
                    
                    // Fechar modal ao clicar fora dele
                    window.onclick = function(event) {
                        const modal = document.getElementById('modal');
                        if (event.target == modal) {
                            closeModal();
                        }
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
                const goleadores = {}; // Objeto para armazenar os jogadores e seus gols
        
                for (let i = 1; i < linhas.length; i++) { // Ignora cabeçalho
                    const celulas = linhas[i].getElementsByTagName('td');
                    if (celulas.length > 0) {
                        // Captura o placar corretamente
                        const jogoTexto = celulas[2].textContent.trim();
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
        
                        // Captura os goleadores corretamente
                        const golsCelula = celulas[4]; // Coluna que contém os artilheiros
                        if (golsCelula) {
                            const golsLista = golsCelula.querySelectorAll('li'); // Assume que os goleadores estão em uma lista dentro da célula
                            golsLista.forEach(item => {
                                const texto = item.textContent.trim();
                                const goleadorInfo = texto.match(/(.+?) - (\d+) gol/); // Exemplo: "Nome do Jogador - 2 gol"
        
                                if (goleadorInfo) {
                                    const jogador = goleadorInfo[1].trim();
                                    const quantidadeGols = parseInt(goleadorInfo[2]);
        
                                    // Soma os gols do jogador
                                    goleadores[jogador] = (goleadores[jogador] || 0) + quantidadeGols;
                                }
                            });
                        }
                    }
                }
        
                // Atualiza o dashboard com estatísticas principais
                document.getElementById('vitorias-inicio').textContent = vitorias;
                document.getElementById('derrotas-inicio').textContent = derrotas;
                document.getElementById('empates-inicio').textContent = empates;
                document.getElementById('gols-feitos-inicio').textContent = golsFeitos;
        
                // Atualiza a tabela de goleadores
                const goleadoresListaInicio = document.getElementById('goleadores-lista-inicio');
                if (goleadoresListaInicio) {
                    goleadoresListaInicio.innerHTML = ''; // Limpa a lista anterior
        
                    for (const [jogador, gols] of Object.entries(goleadores)) {
                        const novaLinha = document.createElement('tr');
                        novaLinha.innerHTML = `<td>${jogador}</td><td>${gols}</td>`;
                        goleadoresListaInicio.appendChild(novaLinha);
                    }
                } else {
                    console.warn('Elemento #goleadores-lista-inicio não encontrado no dashboard!');
                }
        
            } catch (error) {
                console.error('Erro ao carregar os dados da temporada:', error);
            }
        }
        
        // Chama a função ao carregar a página
        window.onload = function() {
            carregarTemporada();
        };
        






















