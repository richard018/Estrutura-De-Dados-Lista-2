import Lista from "../Lista";

class Q2_FComLista { 
    constructor() {
        this.lista = new Lista(); 
    }

    enqueue(dado) { 
        return this.lista.add(dado); 
    }

    dequeue() { 
        return this.lista.removeEnd(); 
    }

    size() { 
        return this.lista.size(); 
    } 
}

export default Q2_FComLista;