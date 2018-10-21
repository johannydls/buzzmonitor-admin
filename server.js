var http = require('http');
var app = require('./config/express')();

require('./config/database')('mongodb://buzzmonitor:buzzmonitor2018@ds055699.mlab.com:55699/buzzmonitor-admin');

http.createServer(app).listen(app.get('port'), () => {
    console.log('Server running on localhost:',app.get('port'));
});
