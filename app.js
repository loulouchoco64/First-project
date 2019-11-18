var http = require('http')
var users =require('./src/users')


users.sayHello()
users.sayGoodbye()

http.createServer(function (req,res){
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('<p><strong>Welcome</strong> to my first project</p>');
    res.end('');
}).listen(1337,'127.0.0.1')
