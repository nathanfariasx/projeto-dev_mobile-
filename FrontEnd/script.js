fetch('/study', { method: 'POST', body: JSON.stringify({ subject, duration }) });

// Função para registrar uma sessão de estudo
async function registerStudy() {
    const subject = document.getElementById('subject').value; // Obtém o valor do campo de matéria
    const duration = document.getElementById('duration').value; // Obtém o valor do campo de duração

    // Faz uma requisição POST para a API do backend
    const response = await fetch('/study', {
        method: 'POST', // Método HTTP POST
        headers: { 'Content-Type': 'application/json' }, // Define o formato da requisição
        body: JSON.stringify({ subject, duration: Number(duration) }) // Converte os dados para JSON e envia
    });

    const data = await response.json(); // Converte a resposta em JSON
    alert(data.message); // Exibe um alerta com a mensagem de resposta
    loadHistory(); // Atualiza o histórico de estudos na tela
}

// Função para carregar o histórico de estudos
async function loadHistory() {
    const response = await fetch('/history'); // Faz uma requisição GET para obter os dados do histórico
    const sessions = await response.json(); // Converte a resposta para JSON
    const historyList = document.getElementById('history'); // Obtém a lista onde será exibido o histórico
    
    historyList.innerHTML = ''; // Limpa a lista antes de atualizar os dados

    // Itera sobre as sessões de estudo e adiciona na lista
    sessions.forEach(session => {
        const li = document.createElement('li'); // Cria um elemento de lista (<li>)
        li.textContent = `${session.subject} - ${session.duration} min (${new Date(session.date).toLocaleDateString()})`; // Define o texto do item
        historyList.appendChild(li); // Adiciona o item à lista
    });
}

// Carrega o histórico automaticamente ao carregar a página
window.onload = loadHistory;
