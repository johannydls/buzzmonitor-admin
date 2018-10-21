var mongoose = require('mongoose');

module.exports = (uri) => {
    mongoose.connect(uri,
        {
            useNewUrlParser: true,
            poolSize: 15
        }
    );

    mongoose.connection.on('connected', () => {
        console.log('Mongoose: Connected in ' + uri);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose: Disconnected from ' + uri);
    });

    mongoose.connection.on('error', (error) => {
        console.log('Mongoose: Error on connection:\n', error);
    });

    mongoose.set('debug', true);

    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log('Mongoose: Disconnected by application termination');
            process.exit(0);
        });
    });
}