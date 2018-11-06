const child_process = require('child_process')

console.log(1)
let fibo = child_process.spawn('node', ['./utilities/fibonacci.js'], {stdio: 'inherit'})
console.log(2)