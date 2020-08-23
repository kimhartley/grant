// local imports
const server = require('./server')

// define port
const port = process.env.PORT || 3000

// run server
server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Love you', port)
})