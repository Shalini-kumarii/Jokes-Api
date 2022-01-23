const UserController = require('../controllers/user.controllers');
console.log("------", UserController);
const {findAllUsers, findOneSingleUser} = require('../controllers/user.controllers');

module.exports = (app) => {
    app.get("/api/hello", (req, res) => {
        res.json({message: "hi"})
    })
    app.get('/api/users', findAllUsers);
    app.get('/api/users/:id', findOneSingleUser);
    app.put('/api/users/:id', UserController.updateExistingUser);
    app.post('/api/users', UserController.createNewUser);
    app.delete('/api/users/:id', UserController.deleteAnExistingUser);
}