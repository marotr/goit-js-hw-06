class StringBuilder {
    #value;

    constructor({ initialValue }) {
        this.#value = initialValue; 
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str; 
        return this.#value.length;
    }

    padStart(str) {
        this.#value = str + this.#value; 
        return this.#value.length;
    }

    padBoth(str) {
        this.#value = str + this.#value + str; 
        return this.#value.length;
    }
}

const builder = new StringBuilder({ initialValue: "." });
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
