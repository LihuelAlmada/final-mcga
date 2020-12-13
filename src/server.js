const http = require('http')
const app = require('./app')

//configuraciones
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app)

server.listen(port)