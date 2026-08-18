import { Livro } from './livro';
import { usuario } from './usuario';
export class Emprestimo {
    livro: Livro; 
    usuario: usuario; 
    dataEmprestimo: Date;

    constructor(livro: Livro, usuario: usuario) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = new Date();
    }
}