var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), () => {
    console.log('Server running on localhost:',app.get('port'));
});
