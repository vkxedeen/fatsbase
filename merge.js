const fs = require("fs");

let arr1 = JSON.parse(fs.readFileSync("tbl1.json"));
let arr2 = JSON.parse(fs.readFileSync("tbl2.json"));

Promise.resolve( JSON.stringify(mergeTbls(arr1, arr2)) )  
  .then(result => {
    fs.writeFile("./data.json", result, err => {
      if (err) throw err;
      console.log("data saved!");
    });
  });

function compare(obj1, arr) {
  //obj1 – проверяемое значение. arr – приоритетный массив
  let obj = {"needCheck": true}
  
  if ( arr.some(item => item.name == obj1.name) ) {
    arr.forEach(item => {
      if (item.name == obj1.name) {
        for (let key in item) {
          obj[key] = item[key]
          if (obj1[key] * 0.95 > item[key] || obj1[key] * 1.05 < item[key]) {
            if (item.name == "Avocado") continue
            if (item.name == "Canola") {
              obj.sF = 7
              obj.fireP = 232
              continue
            }
            if (item.name == "Corn") continue
            if (item.name == "Cottonseed") return obj1
            if (item.name == "Palm") {
              obj.sF = 50
              continue
            }
            if (item.name == "Peanut") return obj1
            if (item.name == "Soybean" && key == "mUF") return obj1
            // проверка корректности значений
            console.log("разница для " + obj1.name + " более 5% в " + key)
            process.exit(1)
          }
        }
      } 
    
    })
    return obj
  }
  else return obj1 
}

function mergeTbls(arr1, arr2) {
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
