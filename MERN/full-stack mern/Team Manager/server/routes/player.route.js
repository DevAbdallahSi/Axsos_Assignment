
const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
    app.post("/api/player", PlayerController.createPlayer);
    app.get("/api/players", PlayerController.getAllPlayers);
    app.get("/api/player/:id", PlayerController.getPlayer);
    app.patch("/api/player/:id", PlayerController.updatePlayer);
    app.delete("/api/player/:id", PlayerController.deletePlayer);
};