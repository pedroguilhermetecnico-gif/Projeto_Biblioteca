export class Livro {
    id: number;
    titulo: string;
    autor: string;
    disponivel: boolean;

    constructor(id: number, titulo: string, autor: string) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponivel = true; 
    }
}