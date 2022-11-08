//371 == (3*3*3)+(7*7*7)+(1*1*1) = 371

function armstrongNumber(num) {
  let result = 0;
  const splitNumber = num
    .toString()
    .split("")
    .map((num) => parseInt(num * num * num));

  for (let i = 0; i < splitNumber.length; i++) {
    result += splitNumber[i];
  }
  return result === num ? "Armstrong Numbers" : "Not Armstrong Numbers";
}

console.log(armstrongNumber(407));
