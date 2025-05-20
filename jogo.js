class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo; // guerreiro, mago, monge, ninja
  }

  atacar() {
    let ataque;

    // Determina o tipo de ataque com base no tipo do herói
    switch (this.tipo.toLowerCase()) { // Usamos toLowerCase() para garantir que a comparação seja case-insensitive
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque desconhecido"; // Caso o tipo não seja um dos previstos
    }

    // Exibe a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplos de uso:

let heroiMago = new Heroi("Gandalf", 1000, "mago");
heroiMago.atacar(); // Saída: O mago atacou usando magia

let heroiGuerreiro = new Heroi("Aragorn", 35, "guerreiro");
heroiGuerreiro.atacar(); // Saída: O guerreiro atacou usando espada

let heroiMonge = new Heroi("Li Mon", 28, "monge");
heroiMonge.atacar(); // Saída: O monge atacou usando artes marciais

let heroiNinja = new Heroi("Hanzo", 29, "ninja");
heroiNinja.atacar(); // Saída: O ninja atacou usando shuriken

let heroiDesconhecido = new Heroi("Aventureiro", 25, "arqueiro");
heroiDesconhecido.atacar(); // Saída: O arqueiro atacou usando um ataque desconhecido