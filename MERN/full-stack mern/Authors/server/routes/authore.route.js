const AuthoreController = require('../controllers/authore.controller');

module.exports = app => {
    app.get('/api/authores', AuthoreController.getAllauthores);
    app.get('/api/authore/:id', AuthoreController.getauthore);
    app.post('/api/authore', AuthoreController.createauthore);
    app.patch('/api/authore/:id', AuthoreController.updateauthore);
    app.delete('/api/authore/:id', AuthoreController.deleteauthore);
};


