const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)
writeFileSync('./content/third-result.txt',
    `here is the 3rd file : ${first + second}`,
    { flag: 'a' }
)