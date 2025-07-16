const player = require('../models/player.model');

module.exports.createPlayer = (req, res) => {
    const { playername ,preferredposition } = req.body;

    player.create({playername ,preferredposition })
        .then(player => res.json(player))
        .catch(err => {
            console.error("❌ Error creating person:", err);
            res.status(400).json(err);
        });
}
module.exports.getAllPlayers = (request, response) => {
    player.find({})
        .then(player => response.json(player))
        .catch(err => response.json(err))
}

module.exports.getPlayer = (request, response) => {
    player.findOne({ _id: request.params.id })
        .then(players => response.json(players))
        .catch(err => response.json(err))
}

module.exports.updatePlayer = (request, response) => {
    player.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedPlayer => response.json(updatedPlayer))
        .catch(err => response.json(err))
}

module.exports.deletePlayer = (request, response) => {
    player.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}