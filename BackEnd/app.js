const express = require('express'); // Importa o framework Express
const app = express(); // Inicializa o aplicativo Express
const port = 3000; // Define a porta do servidor

app.use(express.json()); // Middleware para interpretar JSON nas requisições

// Simulação de banco de dados em memória
let studySessions = []; // Array para armazenar as sessões de estudo temporariamente

// Rota para registrar uma sessão de estudo
app.post('/study', (req, res) => {
    const { subject, duration } = req.body; // Obtém os dados do corpo da requisição
    if (!subject || !duration) { // Verifica se os campos obrigatórios foram preenchidos
        return res.status(400).json({ message: 'Matéria e duração são obrigatórios' });
    }
    
    const session = { id: studySessions.length + 1, subject, duration, date: new Date() }; // Cria um novo registro de estudo
    studySessions.push(session); // Adiciona a sessão ao banco de dados em memória
    res.status(201).json({ message: 'Sessão registrada com sucesso!', session }); // Retorna uma resposta de sucesso
});

// Rota para obter histórico de estudos
app.get('/history', (req, res) => {
    res.json(studySessions); // Retorna todas as sessões registradas
});

// Rota para obter relatório de estudos (tempo total por matéria)
app.get('/report', (req, res) => {
    const report = studySessions.reduce((acc, session) => {
        acc[session.subject] = (acc[session.subject] || 0) + session.duration; // Soma o tempo total estudado por matéria
        return acc;
    }, {});
    res.json(report); // Retorna o relatório de estudo
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`); // Inicia o servidor e exibe a URL no console
});
