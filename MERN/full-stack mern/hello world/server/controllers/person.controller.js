const Person = require('../models/person.model'); // ✅ This line is required

module.exports.createPerson = (req, res) => {
    const { firstName, lastName } = req.body;

    Person.create({ firstName, lastName })
        .then(person => res.json(person))
        .catch(err => {
            console.error("❌ Error creating person:", err);
            res.status(400).json(err);
        });
};


module.exports.getAllPeople = (request, response) => {
    Person.find({})
        .then(persons => response.json(persons))
        .catch(err => response.json(err))
}

module.exports.getPerson = (request, response) => {
    Person.findOne({_id:request.params.id})
        .then(person => response.json(person))
        .catch(err => response.json(err))
}