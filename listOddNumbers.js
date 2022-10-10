const list = [];

const oddNumber = (range) => {
    for (let i = 0; i < range ; i++) {
        if(i % 2 === 1) list.push(i);
    }
    console.log(list)
}

oddNumber(20);