const fs = require('fs')

let style = JSON.parse(fs.readFileSync('src/style.json'))

console.log(JSON.stringify(style, null, 2))

