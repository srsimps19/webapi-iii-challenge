// code away!
  
const server = require('./server.js');
const port = require('./configs/defaults.js')
server.listen(port, () => {
    console.log(`== Server is listening on port ${port} ==`)
})