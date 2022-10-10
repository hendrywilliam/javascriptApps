const arr = [[230, 10, 45, 99, 150], [220, 90, 80, 720, 20], [320, 420, 150, 30, 50]]
const filteredArr = [];

function seekAndDestroy(target = 50) {
    for (let x of arr) {
        filteredArr.push(x.filter((num) => { return num > target }));
    }
    console.log(filteredArr);
};

seekAndDestroy();