export class Post{

    nome : string;
    contenuto : string; 
    commento:string[] = []
    like : number

    constructor(nome : string, contenuto : string){
        this.nome = nome;
        this.contenuto = contenuto;
        this.like = 0
    }
}