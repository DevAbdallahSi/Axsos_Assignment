const authores = require('../models/authore.model');

module.exports.createauthore = (req, res) => {
    const { name } = req.body;

    authores.create({ name })
        .then(authores => res.json(authores))
        .catch(err => {
            console.error("❌ Error creating person:", err);
            res.status(400).json(err);
        });
}
module.exports.getAllauthores = (request, response) => {
    authores.find({})
        .then(authore => response.json(authore))
        .catch(err => response.json(err))
}

module.exports.getauthore = (request, response) => {
    authores.findOne({ _id: request.params.id })
        .then(authores => response.json(authores))
        .catch(err => response.json(err))
}

module.exports.updateauthore = (request, response) => {
    authores.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPerson => response.json(updatedPerson))
        .catch(err => response.json(err))
}

module.exports.deleteauthore = (request, response) => {
    authores.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}