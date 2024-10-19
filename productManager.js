class productManager {
    #basePrice = 0.15; //colocando o # torna uma propriedade privada

    constructor() { //similar com uma callback que constrói uma linha de propriedade. Define propriedades públicas
        this.event = [];
        this.nextId = 1;
    }


//método adicionando um evento
addEvent(nome, lugar, preco, capacidade = 50, data = new Date()) { //se não for mandado a capacidade ou a data, atribuimos um valor padrão de capacidade sendo 50 e a data sendo o momento em que foi criado 
    const novoEvento = {
        id: this.nextId,
        nome: nome,
        lugar: lugar,
        preco: preco * this.#basePrice, //inserir o this pois se trata de um valor privado
        capacidade: capacidade,
        data: data,
        participante: [],
    };

    this.event.push(novoEvento);
}

//getter
getEvent() {
    return this.event
}
}

//instanciando a classe chamando o "new". Ele vai usar as infos da classe addEvent que criamos e estabelecemos os parâmetros na linha 11.
const manager = new productManager()
manager.addEvent('evento x', "local y", 100)
manager.addEvent("evento a", "local b", 200)
console.log(manager.getEvent())