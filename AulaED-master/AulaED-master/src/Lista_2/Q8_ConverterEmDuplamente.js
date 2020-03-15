import ListaD from "../ListaDuplamenteLigada";

class Questao8 {
  constructor(listaPa) {
    this.listaD = new ListaD();
    this.listaPa = listaPa;
  }

  convert() {
    while (!this.listaPa.isEmpty()) {
      this.listaD.add(this.listaPa.removeEnd());
    }

    return this.listaD;
  }
}

export default Q8_ConverterEmDuplamente;