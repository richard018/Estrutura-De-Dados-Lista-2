import Q1_PComLista from "../src/Lista_2/Q1_PComLista";

let pa;

beforeEach(() => {
    pa = new Q1_PComLista();
});

test("Questao 1 ", () => {
    pa.push(1);
    pa.push(2);
    pa.push(3);
    pa.push(4);
    pa.push(5);
    expect(pa.pop()).toBe(5);
});