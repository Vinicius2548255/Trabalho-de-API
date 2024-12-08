const biblioteca = {
    livros: [],
    idAtual: 1,

    // Criar
    adicionarLivro(titulo, autor, genero, anoPublicacao) {
        if (!titulo || !autor || !genero || !anoPublicacao) {
            console.log('Erro: Todos os campos são obrigatórios.');
            return;
        }
        const novoLivro = {
            id: this.idAtual++,
            titulo,
            autor,
            genero,
            anoPublicacao
        };
        this.livros.push(novoLivro);
        console.log(`Livro adicionado: ${novoLivro.titulo}`);
    },

    // Ler (Visualizar todos)
    visualizarTodosOsLivros() {
        return this.livros.length > 0
            ? this.livros
            : 'Nenhum livro encontrado na biblioteca.';
    },

    // Ler (Visualizar um por ID)
    visualizarLivroPorId(id) {
        const livro = this.livros.find(livro => livro.id === id);
        return livro || `Livro com ID ${id} não encontrado.`;
    },

    // Atualizar
    atualizarLivro(id, novoTitulo, novoAutor, novoGenero, novoAnoPublicacao) {
        const livro = this.livros.find(livro => livro.id === id);
        if (livro) {
            livro.titulo = novoTitulo || livro.titulo;
            livro.autor = novoAutor || livro.autor;
            livro.genero = novoGenero || livro.genero;
            livro.anoPublicacao = novoAnoPublicacao || livro.anoPublicacao;
            console.log(`Livro atualizado: ${livro.titulo}`);
        } else {
            console.log(`Livro com ID ${id} não encontrado.`);
        }
    },

    // Excluir
    excluirLivro(id) {
        const indice = this.livros.findIndex(livro => livro.id === id);
        if (indice !== -1) {
            const livroRemovido = this.livros.splice(indice, 1);
            console.log(`Livro removido: ${livroRemovido[0].titulo}`);
        } else {
            console.log(`Livro com ID ${id} não encontrado.`);
        }
    }
};

// Exemplo de uso
biblioteca.adicionarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien', 'Fantasia', 1954);
biblioteca.adicionarLivro('1984', 'George Orwell', 'Distopia', 1949);

console.log(biblioteca.visualizarTodosOsLivros());

biblioteca.atualizarLivro(1, 'O Hobbit', null, null, 1937);
console.log(biblioteca.visualizarTodosOsLivros());

biblioteca.excluirLivro(2);
console.log(biblioteca.visualizarTodosOsLivros());

let livros = [];
let idGerador = 1;

function listar() {
    return livros;
}

function inserir(livro) {
    if (!livro || !livro.titulo || !livro.autor) {
        throw { id: 400, message: 'Campos obrigatórios: titulo e autor' };
    }
    livro.id = idGerador++;
    livros.push(livro);const biblioteca = {
        livros: [],
        idAtual: 1,
    
        // Criar
        adicionarLivro(titulo, autor, genero, anoPublicacao) {
            if (!titulo || !autor || !genero || !anoPublicacao) {
                console.log('Erro: Todos os campos são obrigatórios.');
                return;
            }
            const novoLivro = {
                id: this.idAtual++,
                titulo,
                autor,
                genero,
                anoPublicacao
            };
            this.livros.push(novoLivro);
            console.log(`Livro adicionado: ${novoLivro.titulo}`);
        },
    
        // Ler (Visualizar todos)
        visualizarTodosOsLivros() {
            return this.livros.length > 0
                ? this.livros
                : 'Nenhum livro encontrado na biblioteca.';
        },
    
        // Ler (Visualizar um por ID)
        visualizarLivroPorId(id) {
            const livro = this.livros.find(livro => livro.id === id);
            return livro || `Livro com ID ${id} não encontrado.`;
        },
    
        // Atualizar
        atualizarLivro(id, novoTitulo, novoAutor, novoGenero, novoAnoPublicacao) {
            const livro = this.livros.find(livro => livro.id === id);
            if (livro) {
                livro.titulo = novoTitulo || livro.titulo;
                livro.autor = novoAutor || livro.autor;
                livro.genero = novoGenero || livro.genero;
                livro.anoPublicacao = novoAnoPublicacao || livro.anoPublicacao;
                console.log(`Livro atualizado: ${livro.titulo}`);
            } else {
                console.log(`Livro com ID ${id} não encontrado.`);
            }
        },
    
        // Excluir
        excluirLivro(id) {
            const indice = this.livros.findIndex(livro => livro.id === id);
            if (indice !== -1) {
                const livroRemovido = this.livros.splice(indice, 1);
                console.log(`Livro removido: ${livroRemovido[0].titulo}`);
            } else {
                console.log(`Livro com ID ${id} não encontrado.`);
            }
        }
    };
    
    // Exemplo de uso
    biblioteca.adicionarLivro('O Senhor dos Anéis', 'J.R.R. Tolkien', 'Fantasia', 1954);
    biblioteca.adicionarLivro('1984', 'George Orwell', 'Distopia', 1949);
    
    console.log(biblioteca.visualizarTodosOsLivros());
    
    biblioteca.atualizarLivro(1, 'O Hobbit', null, null, 1937);
    console.log(biblioteca.visualizarTodosOsLivros());
    
    biblioteca.excluirLivro(2);
    console.log(biblioteca.visualizarTodosOsLivros());
    
    return livro;
}

function buscarPorId(id) {
    const livro = livros.find((l) => l.id === id);
    if (!livro) {
        throw { id: 404, message: 'Livro não encontrado' };
    }
    return livro;
}

function atualizar(id, novoLivro) {
    if (!novoLivro || !novoLivro.titulo || !novoLivro.autor) {
        throw { id: 400, message: 'Campos obrigatórios: titulo e autor' };
    }
    const index = livros.findIndex((l) => l.id === id);
    if (index === -1) {
        throw { id: 404, message: 'Livro não encontrado' };
    }
    livros[index] = { id, ...novoLivro };
    return livros[index];
}

function deletar(id) {
    const index = livros.findIndex((l) => l.id === id);
    if (index === -1) {
        throw { id: 404, message: 'Livro não encontrado' };
    }
    return livros.splice(index, 1)[0];
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar,
};
