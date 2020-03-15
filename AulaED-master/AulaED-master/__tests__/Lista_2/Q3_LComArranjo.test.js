import Q3_LComArranjo from "../../src/Lista_2/Q3_LComArranjo";


    let pa;

    beforeEach(() => {
        pa = new Q3_LComArranjo();
    });

    test("questao 3", ()=>{
        pa.add(2);
        pa.add(1);
        pa.append(3);
        pa.append(4);
        expect(pa.remove()).toBe(1);
        expect(pa.removeEnd()).toBe(4);
        pa.append(5);
        pa.add(1);
        pa.addAt(3, 4)
        expect(pa.toString()).toEqual("1 2 3 4 5 ");
        pa.addAt(4, 10);
        pa.addAt(3, 10);
        expect(pa.toString()).toEqual("1 2 3 10 4 10 5 ");
        pa.removeAt(3);
        pa.removeAt(4);
        expect(pa.toString()).toEqual("1 2 3 4 5 ");

    });