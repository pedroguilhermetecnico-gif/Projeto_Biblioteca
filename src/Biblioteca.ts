import { Livro } from './Livro';
import { Usuario } from './Usuario';
import { Emprestimo } from './Emprestimo';

export class Biblioteca {
    livros: Livro[] = [];
    usuarios: Usuario[] = [];
    emprestimos: Emprestimo[] = [];

    cadastrarLivro(novoLivro: Livro) {
        this.livros.push(novoLivro);
        console.log(`📚 Livro "${novoLivro.titulo}" adicionado ao acervo!`);
    }

    cadastrarUsuario(novoUsuario: Usuario) {
        this.usuarios.push(novoUsuario);
        console.log(`👤 Usuário "${novoUsuario.nome}" cadastrado com sucesso!`);
    }

    // NOVA FUNÇÃO: Fazendo o empréstimo acontecer
    fazerEmprestimo(tituloLivro: string, nomeUsuario: string) {
        // 1. Procuramos se o livro e o usuário existem nas nossas listas
        const livroEncontrado = this.livros.find(livro => livro.titulo === tituloLivro);
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.nome === nomeUsuario);

        // 2. Fazemos as verificações de segurança
        if (!livroEncontrado) {
            console.log("❌ Livro não encontrado no acervo.");
            return; // O return para a função aqui mesmo
        }
        if (!usuarioEncontrado) {
            console.log("❌ Usuário não encontrado no sistema.");
            return;
        }
        if (livroEncontrado.disponivel === false) {
            console.log(`❌ O livro "${livroEncontrado.titulo}" já está emprestado com outra pessoa.`);
            return;
        }

        // 3. Se deu tudo certo, criamos o empréstimo!
        const novoEmprestimo = new Emprestimo(livroEncontrado, usuarioEncontrado);
        this.emprestimos.push(novoEmprestimo);
        livroEncontrado.disponivel = false; // Tiramos o livro da prateleira

        console.log(`✅ Sucesso! O livro "${livroEncontrado.titulo}" foi emprestado para ${usuarioEncontrado.nome}.`);
    }
}