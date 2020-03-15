import Q8_ConverterEmDuplament from "../../src/Lista_2/Q8_ConverterEmDuplament";
import Lista from "../../src/Lista";

test("Questao 8", () => {
  let listaPa = new Lista();
  listaPa.append(1);
  listaPa.append(2);
  listaPa.append(3);
  listaPa.append(4);
  listaPa.append(5);

  let listD = new Q8_ConverterEmDuplamente(listPa);
  expect(listD.convert().tail.dado).toBe(5);
  expect(listD.convert().head.dado).toBe(1);
  expect(listD.convert().toString()).toBe("1->2->3->4->5");
});