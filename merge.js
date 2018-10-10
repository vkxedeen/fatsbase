const fs = require("fs");

let arr1 = JSON.parse(fs.readFileSync("tbl1.json"));
let arr2 = JSON.parse(fs.readFileSync("tbl2.json"));

let res = merge(arr1, arr2);

function compare(obj1, arr) {
  //obj1 – приоритет. arr – второй массив
  let obj = Object.assign({}, obj1);
  arr.forEach(item => {
    if (obj1.name == item.name) {
      for (let key in item) {
        if (obj1[key] * 0.95 > item[key] || obj1[key] * 1.05 < item[key]) {
          console.log("разница для " + obj1.name + " более 5% в " + key);
          obj["needCheck"] = true;
          obj[key] = item[key];
        }
      }
    }
  });
  return obj;
}

function merge(arr1, arr2) {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    result = compare(arr1[i], arr2);
    if (result.needCheck) arr.push(result, arr1[i]);
    else arr.push(result);
  }
  return arr;
}
