
const UserController = require("../controllers/user.controller");

module.exports = (app) => {
    app.post("/api/user", UserController.createUser);
    app.get("/api/users", UserController.getAllUsers);
    app.get("/api/user/:id", UserController.getUser);
    app.patch("/api/user/:id", UserController.updateUser);
    app.delete("/api/user/:id", UserController.deleteUser);
};