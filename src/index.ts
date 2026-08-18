import { Livro } from './livro';
import { usuario } from './usuario'; 
import { Emprestimo } from './Emprestimo';
import promptSync from 'prompt-sync';

const prompt = promptSync();

console.log("=== SISTEMA DA BIBLIOTECA ===");

const nomeDigitado = prompt('Digite o nome do usuário: ');
const tituloLivro = prompt('Qual livro o usuário deseja pegar? ');

const leitor = new usuario(102, nomeDigitado, "email@padrao.com");
const meuLivro = new Livro(2, tituloLivro, "Autor Desconhecido"); 

const novoEmprestimo = new Emprestimo(meuLivro, leitor);
meuLivro.disponivel = false; 

console.log(`
--- Resumo do Empréstimo ---
Livro: ${novoEmprestimo.livro.titulo}
Pegou emprestado por: ${novoEmprestimo.usuario.nome}
Data: ${novoEmprestimo.dataEmprestimo}
`);