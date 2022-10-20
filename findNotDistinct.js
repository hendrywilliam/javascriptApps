//newArr1 = n + 1
//newArr2 = n * 2
//count how many pairs are not distinct

const findSameNum = (arr) => {
    const newArr1 = [];
    const newArr2 = [];
    let result = 0;
    arr.forEach((value) => {
        newArr1.push(value + 1);
        newArr2.push(value * 2);
    })

    for (let i = 0; i < arr.length ; i++) {
        if(newArr1.includes(newArr2[i])) {
            result++
        }
    }
    console.log(result)
    
}

findSameNum([1,1,3,3,5,5,7,7])