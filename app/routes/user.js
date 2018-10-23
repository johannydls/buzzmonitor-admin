module.exports = (app) => {

    let controller = app.controllers.user;

    app.get('/api/users', controller.listUsers);
    app.get('/api/users/:id', controller.getUser);
    app.post('/api/users', controller.saveUser);
    
    /*app.route('/api/users')
        .get(controller.listUsers);
    
    app.route('/api/users/:id')
    .get(controller.getUser)
    .post(controller.saveUser)
    .delete(controller.removeUser);*/

}