import Lista from "../Lista";

class Q4_Inverter {
  constructor() {
    this.lista1 = new Lista();
    this.lista2 = new Lista();
  }

  push(dado) {
    this.lista1.append(dado);
  }

  pop() {
    return this.lista1.removeEnd();
  }

  reverse() {
    while (!this.lista1.isEmpty()) {
      this.lista2.append(this.lista1.removeEnd());
    }

    this.lista1 = this.lista2;

    return this.lista2;
  }
}

export default Q4_Inverter;