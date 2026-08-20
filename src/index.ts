import { Livro } from './Livro';
import { Usuario } from './Usuario'; 
import { Biblioteca } from './Biblioteca';
import promptSync from 'prompt-sync';

const prompt = promptSync();
const minhaBiblioteca = new Biblioteca();

let sistemaRodando = true;

while (sistemaRodando) {
    console.log(`
=== MENU DA BIBLIOTECA ===
1. Cadastrar novo Livro
2. Cadastrar novo Usuário
3. Ver resumo do Acervo
4. Fazer Empréstimo
0. Sair do Sistema
==========================`);

    const opcao = prompt('Escolha uma opção: ');

    if (opcao === '1') {
        const tituloLivro = prompt('Nome do livro: ');
        const novoLivro = new Livro(minhaBiblioteca.livros.length + 1, tituloLivro, "Autor Desconhecido"); 
        minhaBiblioteca.cadastrarLivro(novoLivro);

    } else if (opcao === '2') {
        const nomeDigitado = prompt('Nome do usuário: ');
        const novoUsuario = new Usuario(minhaBiblioteca.usuarios.length + 1, nomeDigitado, "email@padrao.com");
        minhaBiblioteca.cadastrarUsuario(novoUsuario);

    } else if (opcao === '3') {
        console.log(`\n📚 Total de Livros: ${minhaBiblioteca.livros.length}`);
        console.log(`👤 Total de Usuários: ${minhaBiblioteca.usuarios.length}`);
        console.log(`🤝 Total de Empréstimos Ativos: ${minhaBiblioteca.emprestimos.length}`);

    } else if (opcao === '4') {
        console.log("\n--- Novo Empréstimo ---");
        const tituloLivro = prompt('Qual o nome do livro? ');
        const nomeUsuario = prompt('Qual o nome do usuário? ');
        
        // Chamamos a função mágica que acabamos de criar!
        minhaBiblioteca.fazerEmprestimo(tituloLivro, nomeUsuario);

    } else if (opcao === '0') {
        console.log("\nDesligando o sistema... Até logo!");
        sistemaRodando = false; 

    } else {
        console.log("\n❌ Opção inválida, tente novamente.");
    }
}