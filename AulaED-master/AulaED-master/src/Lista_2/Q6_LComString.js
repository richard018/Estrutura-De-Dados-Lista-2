import Lista from '../Lista';

class Q6_LComString {
  constructor(lista){
    this.lista = lista;
  }
  substring(inicio, fim) {
    let aux = new Lista();
    let cont = 0;
    while (!this.lista.isEmpty()) {
      let p = this.lista.removeEnd();
      if(cont >= inicio && cont <= fim){
        aux.append(p);  
      }
      cont++;
    }
    return aux.toString();
  }

  append(dado) {
    this.lista.add(dado);
  }

  toString() {
    return this.lista.toString();
  }

}

export default Q6_LComString;