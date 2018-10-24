const fs = require("fs");

let arr1 = JSON.parse(fs.readFileSync("temp/tbl1.json"));
let arr2 = JSON.parse(fs.readFileSync("temp/tbl2.json"));

Promise.resolve(JSON.stringify(mergeTbls(arr1, arr2))).then(result => {
  fs.writeFile("./public/data.json", result, err => {
    if (err) throw err;
    console.log("data saved!");
  });
});

function compare(obj1, arr) {
  //obj1 – проверяемое значение. arr – приоритетный массив

  if (arr.some(item => item.name == obj1.name)) {
    promRes = arr.filter(item => item.name == obj1.name)[0];
    for (let key in promRes) {
      if (promRes[key] * 0.95 > obj1[key] || promRes[key] * 1.05 < obj1[key]) {
        if (promRes.name == "Avocado") continue;
        if (promRes.name == "Canola") {
          promRes.sF = 7;
          promRes.fireP = 232;
          continue;
        }
        if (promRes.name == "Corn") continue;
        if (promRes.name == "Cottonseed") return obj1;
        if (promRes.name == "Palm") {
          promRes.sF = 50;
          continue;
        }
        if (promRes.name == "Peanut") return obj1;
        if (promRes.name == "Safflower(linoleic)") {
          promRes.omega3 = 0.1;
          promRes.omega6 = 12.7;
          continue;
        }
        if (promRes.name == "Safflower(higholeic)") {
          promRes.omega3 = 0.5;
          promRes.omega6 = 75.7;
          continue;
        }
        if (promRes.name == "Soybean") return obj1;
        // проверка корректности значений
        console.log("разница для " + obj1.name + " более 5% в " + key);
        process.exit(1);
      }
      return promRes;
    }
  } else return obj1;
}

function mergeTbls(arr1, arr2) {
  let arr = arr1.slice();
  for (let i = 0; i < arr2.length; i++) {
    result = compare(arr2[i], arr1);
  }
  let newArr = arr.filter(item => item.name != result.name);
  newArr.push(result);
  arr = newArr.slice();

  return arr.map(item => {
    let sum = item.sF + item.mUF + item.omega3 + item.omega6;
    if (sum > 100) {
      if (item.name == "Cottonseed") {
        item.omega3 = 0.1;
        item.omega6 = 52.2;
        item.sF = 29.4;
        item.mUF = 18.3;
        return item;
      }
      if (item.name == "Margarine (hard)") {
        item.omega3 = 0;
        item.omega6 = 9;
        item.sF = 32.7;
        item.mUF = 52;
        return item;
      }
      if (item.name == "Pumpkinseed") {
        item.omega3 = 4.9;
        item.omega6 = 56;
        item.sF = 2.3;
        item.mUF = 3.9;
        return item;
      }
      if (item.name == "Ricebran") {
        item.omega3 = 1.3;
        item.omega6 = 31.9;
        item.sF = 23.3;
        item.mUF = 43;
        return item;
      }
      if (item.name == "Teaseed") {
        item.sF = 20;
        item.mUF = 57;
        return item;
      }
      console.log("сумма жиров в " + item.name + " равна " + sum);
      process.exit(1);
    }
    return item;
  });
}
