module.exports = (app) => {

    let controller = app.controllers.user;

    app.get('/api/users', controller.listUsers);
    app.get('/api/users/:id', controller.getUser);
    
}