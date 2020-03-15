import Q2_FComLista from "../../src/Lista_2/Questao2";

let pa;

beforeEach(() => {
  pa = new Q2_FComLista();
});

test("Questao 2 ", () => {
  pa.enqueue(1);
  pa.enqueue(2);
  pa.enqueue(3);
  pa.enqueue(4);
  pa.enqueue(5);
  expect(pa.dequeue()).toBe(1);
});