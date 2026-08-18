import { livro } from './livro';
import { usuario } from './usuario';

export class Emprestimo {
    livro: livro;
    usuario: usuario;
    dataEmprestimo: Date;

    constructor(livro: livro, usuario: usuario) {
        this.livro = livro;
        this.usuario = usuario;
        this.dataEmprestimo = new Date();
    }
}