import Lista from "../Lista";

class Q1_PComLista {
  constructor() {
    this.lista = new Lista();
  }

  push(dado) {
    return this.lista.append(dado);
  }
  pop() {
    return this.lista.removeEnd();
  }
  size() {
    return this.lista.size();
  }
  top(){
    return this.lista.head.proximo.dado;
  }
}

export default Q1_PComLista;