import Lista from "../../src/Lista_2/Questao5";

let pa;

beforeEach(() => {
  pa = new Lista();
});

test("Questao 5", () => {
  pa.append(1);
  pa.append(2);
  pa.append(3);
  pa.append(4);
  pa.append(5);

  expect(pa.toString()).toEqual("1->2->3->4->5");
  pa.shuffle();
  expect(pa.toString()).not.toEqual("1->2->3->4->5");
});