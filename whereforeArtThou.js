function whatIsInAName(collection, source) {
  const arr = []
  const check = collection.filter((value) => {
    if(value.hasOwnProperty(source)) {
      arr.push(value)
    }
  })
  console.log(check)
  // return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });