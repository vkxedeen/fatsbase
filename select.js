const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require("fs");

let body = fs.readFileSync("html1.html");
let dom = new JSDOM(body);
let body2 = fs.readFileSync("html3.html");
let dom2 = new JSDOM(body2);

//-------------------------- table 1 ---------------------------------------

let consistTbl = dom.window.document.querySelectorAll(".wikitable")[2];
let data1 = [];
let rows1 = consistTbl.rows;
for (let i = 2; i < rows1.length - 1; i++) {

  let name = rows1[i].cells[0].textContent.match(/[()-,a-zA-Z/s]/g).join("").replace(/oil/, "");
  let sF = Number(rows1[i].cells[1].textContent.match(/^\d+/g) || "0")
  let mUF = Number(rows1[i].cells[2].textContent.match(/^\d+/g) || "0")
  
  let omega6 = Number(rows1[i].cells[5].textContent.match(/[\d.]+/) || "0")
  let omega3 = Number(rows1[i].cells[4].textContent.match(/[\d.]+/) || "0")
 
  let fireP = Number(rows1[i].cells[6].textContent.match(/^\d+/g) || "0")

  let row1 = { name, omega6, omega3, fireP }
    row1.sF = Math.round(sF * 100) / 100,
    row1.mUF = Math.round(mUF * 100) / 100,

  data1.push(row1);
}
dataJS1 = JSON.stringify(data1);

fs.writeFileSync("./tbl1.json", dataJS1, err => {
  if (err) throw err;
  console.log("table 1 saved!");
});

//-------------------------- table 2 ---------------------------------------

let consistTbl2 = dom2.window.document.querySelectorAll(".wikitable")[0];
let data2 = [];
let rows2 = consistTbl2.rows;
for (let i = 3; i < rows2.length - 4; i++) {

  let name = rows2[i].cells[0].textContent.match(/[-,a-zA-Z\s\/]/g).join("");
  let sF = Number(rows2[i].cells[2].textContent || "0");
  let mUF = Number(rows2[i].cells[3].textContent || "0");
  let omega6 = Number(rows2[i].cells[7].textContent || "0");
  let omega3 = Number(rows2[i].cells[6].textContent || "0");
  let fireP = Number(rows2[i].cells[8].textContent.match(/\d+/)[0] || "0");

  let row2 = { name, sF, mUF, omega6, omega3, fireP } 
   
  data2.push(row2);
}
dataJS2 = JSON.stringify(data2);

fs.writeFileSync("./tbl2.json", dataJS2, err => {
  if (err) throw err;
  console.log("table 2 saved!");
});
