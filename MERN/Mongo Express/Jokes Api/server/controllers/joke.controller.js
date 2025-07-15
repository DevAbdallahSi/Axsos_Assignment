const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then(jokes => res.json({ jokes }))
    .catch(err => res.json(err));
};

module.exports.findOneJoke = (req, res) => {
  Joke.findById(req.params.id)
    .then(joke => res.json({ joke }))
    .catch(err => res.json(err));
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then(joke => res.json({ joke }))
    .catch(err => res.json(err));
};

module.exports.updateJoke = (req, res) => {
  Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(joke => res.json({ joke }))
    .catch(err => res.json(err));
};

module.exports.deleteJoke = (req, res) => {
  Joke.findByIdAndDelete(req.params.id)
    .then(result => res.json({ result }))
    .catch(err => res.json(err));
};
