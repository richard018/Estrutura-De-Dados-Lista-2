class Q3_LComArranjo {
    constructor(){
        this.lista = [];
    }

    add(dado) {
        let temp = [dado];
        for(let i = 0; i < this.lista.length; i++) {
            temp[i+1] = this.lista[i];
        }

        this.lista = temp;
        return this.lista;
    }
    append(dado) {
        this.lista[this.lista.length] = dado;
        return this.lista;
    }

    remove() {
        let temp = [];
        let aux = this.lista[0];

        for(let i = 1; i < this.lista.length; i++) {
            temp[i-1] = this.lista[i];
        }
        this.lista = temp;
        return aux;
    }

    removeEnd() {
        let temp = [];
        let aux = this.lista[this.lista.length - 1];
        for(let i = 0; i < this.lista.length - 1; i++) {
            temp[i] = this.lista[i];
        }

        this.lista = temp;
        return aux;
    }
    addAt(pos, dado) {
        if(pos <= 0) {
            this.add(dado);
        }
        else if (pos >= this.lista.length) {
            this.append(dado);
        }
        else {
            let temp = [];
            for(let i = 0; i < pos; i++) {
                temp[i] = this.lista[i];
            }
            temp[pos] = dado;
            for(let i = pos+1; i < this.lista.length+1; i++) {
                temp[i] = this.lista[i-1];
            }
            this.lista = temp;

            return this.lista;
        }
    }

    removeAt(pos) {
        let aux;
        if(pos <= 0) {
            aux = this.remove();
        }
        else if (pos >= this.lista.length) {
            aux = this.removeEnd();
        }
        else {
            let temp = [];
            aux = this.lista[pos];
            for(let i = 0; i < pos; i++) {
                temp[i] = this.lista[i];
            }
            for(let i = pos; i < this.lista.length - 1; i++) {
                temp[i] = this.lista[i + 1];
            }
            this.lista = temp;

        }
        return aux;
    }

    toString() {
        let result = "";
        this.lista.forEach(dado => {
            result += dado + " ";
        });

        return result;
    }
}

export default Q3_LComArranjo;