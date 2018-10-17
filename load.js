
const needle = require('needle')
const fs = require('fs')

const URL = 'https://en.wikipedia.org/wiki/Cooking_oil'
const URL2 = 'https://en.wikipedia.org/wiki/Hemp_oil'

needle.get(URL, function (err, _, body) {
  if (err) throw err;
  fs.writeFileSync('./temp/html1.html', body) 
})

needle.get(URL2, function (err, _,  body) {
  if (err) throw err
  fs.writeFileSync('./temp/html3.html', body) 
})