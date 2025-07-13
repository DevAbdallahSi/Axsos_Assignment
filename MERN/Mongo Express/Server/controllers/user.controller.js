const User = require('../models/user.model');

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then(users => res.json({ users }))
    .catch(err => res.json(err));
};

module.exports.findOneUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json({ user }))
    .catch(err => res.json(err));
};

module.exports.createUser = (req, res) => {
  User.create(req.body)
    .then(user => res.json({ user }))
    .catch(err => res.json(err));
};

module.exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(user => res.json({ user }))
    .catch(err => res.json(err));
};

module.exports.deleteUser = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(result => res.json({ result }))
    .catch(err => res.json(err));
};
