
const PersonController = require('../controllers/person.controller');

module.exports = app => {
app.get('/api', (req, res) => {
        res.json({ message: "Hello from the API!" });
});    
app.post('/api/people', PersonController.createPerson); // ✅ function handler


app.get('/api/people', PersonController.getAllPeople);

app.get('/api/people/:id', PersonController.getPerson);


};
