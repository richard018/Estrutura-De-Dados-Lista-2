import Q4_Inverter from "../../src/Lista_2/Q4_Inverter";

let pa;

beforeEach(() => {
  pa = new Q4_Inverter();
});

test("Questao 4", () => {
  pa.push(1);
  pa.push(2);
  pa.push(3);
  pa.push(4);
  pa.push(5);
  pa.reverse();
  expect(pa.pop()).toBe(1);
});