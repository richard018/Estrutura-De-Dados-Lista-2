import Q6_LComString from '../../src/Lista_2/Q6_LComString';
import Lista from '../../src/Lista';


let lista;
let pa;
beforeEach(() => {
  lista = new Lista();
  pa = new Q6_LComString(lista);
});


test("Questao 6", () => {

  pa.append('a');
  pa.append('b');
  pa.append('c');
  pa.append('d');
  pa.append('e');
  pa.append('f');

  expect(pa.substring(1,2)).toBe("b->c");

});