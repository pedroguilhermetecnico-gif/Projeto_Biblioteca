import { Livro } from './Livro';
import { usuario } from './Usuario';
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