// CRUD
// our controller is importing the Model
const User = require('../models/user.models');

module.exports = {
    // READ ALL
    findAllUsers : (req, res) => {
        // db.users.find()
        User.find()
        // IMPORTANT what we return here is what we receive in REACT!
            .then(allDaUsers => res.json(allDaUsers))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // READ ONE
    findOneSingleUser : (req, res) => {
        // /api/users/:id
        // User.findOne({ _id: req.params.id })
        User.findById(req.params.id)
            .then(oneSingleUser => res.json({ user: oneSingleUser }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // CREATE
    createNewUser : (req, res) => {
        console.log(req.body);
        const {name} = req.body;
        // User.create({name: name, age: req.body.age})
        User.create(req.body)
            .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // UPDATE
    updateExistingUser: (req, res) => {
        // /api/users/:id
        // User.findOneAndUpdate(
        //     { _id: req.params.id }, 
        //     req.body,
        //     { new: true, runValidators: true }
        // )
        User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedUser => res.json({ user: updatedUser }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // DELETE
    deleteAnExistingUser : (req, res) => {
        // /api/users/:id
        const {id} = req.params
        // User.deleteOne({ _id: req.params.id })
        User.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result: result }))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    }
}