const fs = require("fs");

let arr1 = JSON.parse(fs.readFileSync("tbl1.json"));
let arr2 = JSON.parse(fs.readFileSync("tbl2.json"));

let promise = new Promise(resolve => {
  let result = JSON.stringify(merge(arr1, arr2));
  resolve(result);
  console.log(result);
});

promise.then(result => {
  fs.writeFile("./data.json", result, err => {
    if (err) throw err;
    console.log("data saved!");
  });
});

result = merge (arr1, arr2)

function compare(obj1, arr) {
  //obj1 – проверяемое значение. arr – приоритетный массив
  let obj = {"needCheck": true}
  if ( arr.some(item => item.name == obj1.name) ) {
    arr.forEach(item => {
      if (item.name == obj1.name) {
        for (let key in item) {
          obj[key] = item[key]
          if (obj1[key] * 0.95 > item[key] || obj1[key] * 1.05 < item[key]) {
            console.log("разница для " + obj1.name + " более 5% в " + key);
          }
        }
      } 
     
    })
    return obj
  }
  else return obj1 
}

function merge(arr1, arr2) {
  let arr = arr1.slice();

  for (let i = 0; i < arr2.length; i++) {
    result = compare(arr2[i], arr1);
    if (result.needCheck) {
      let newArr = arr.filter(item => item.name != result.name)
      newArr.push(result)
      arr = newArr.slice()
    }
    else arr.push(result);
  }
  return arr;
}
