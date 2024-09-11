//classees de um game RPG

class Heroi {
    constructor(nome, idade, tipo, poder){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.poder = poder;
    }

    atacar() {
        return `O ${this.tipo} atacou usando ${this.poder}`;
    }
}

let mago = new Heroi("Raimundo", 103, "mago", "magia");
const chamarMago = mago.atacar();
console.log(chamarMago);

let guerreiro = new Heroi("Silvio", 96, "guerreiro", "espada");
const chamarGuerreiro = guerreiro.atacar();
console.log(chamarGuerreiro);

let cachorro = new Heroi("Caramelo", 2000, "melhor amigo do homem", "os dentes");
const chamarCachorro = cachorro.atacar();
console.log(chamarCachorro);