const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Simulando o "banco de dados" em memória
let livros = [];
let idAtual = 1;

// Adicionar um livro
app.post('/livros', (req, res) => {
    const { titulo, genero } = req.body;
    if (!titulo || !genero) {
        return res.status(400).json({ erro: 'Título e gênero são obrigatórios.' });
    }

    const novoLivro = {
        id: idAtual++,
        titulo,
        genero
    };
    
    livros.push(novoLivro);
    res.status(201).json(novoLivro);
});

// Listar todos os livros
app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

// Atualizar um livro
app.put('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { titulo, genero } = req.body;

    const livroIndex = livros.findIndex(l => l.id === id);
    if (livroIndex === -1) {
        return res.status(404).json({ erro: 'Livro não encontrado.' });
    }

    if (titulo) livros[livroIndex].titulo = titulo;
    if (genero) livros[livroIndex].genero = genero;

    res.status(200).json(livros[livroIndex]);
});

// Excluir um livro
app.delete('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const livroIndex = livros.findIndex(l => l.id === id);
    if (livroIndex === -1) {
        return res.status(404).json({ erro: 'Livro não encontrado.' });
    }

    livros.splice(livroIndex, 1);
    res.status(200).json({ mensagem: 'Livro excluído com sucesso.' });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
