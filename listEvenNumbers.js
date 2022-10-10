const list = [];

const evenNumbers = (range) => {
    for (let i = 1; i < range; i++) {
        if (i % 2 === 0) list.push(i);
    }
    console.log(list);
}

evenNumbers(10);