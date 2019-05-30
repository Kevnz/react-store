const path = require('path')
console.log('opat', path.join(process.cwd(), '/dist'))
const config = {
  root: './dist',
  port: 3030,
  filename: 'index.html',
}
const cling = require('static-cling')

cling(config)
