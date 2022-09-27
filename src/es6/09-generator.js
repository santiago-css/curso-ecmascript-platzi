function* iterate(array)  {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Oscar", "Santiago", "David", "Gerlis"]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value); 