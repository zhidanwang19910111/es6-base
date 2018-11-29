/* let str = require('./b.js')
console.log(str) */
let fs = require('fs')
function req(moduleName){
    let result = fs.readFileSync(moduleName, 'utf8')
    console.log(result)
}
let str = req('./b.js')

