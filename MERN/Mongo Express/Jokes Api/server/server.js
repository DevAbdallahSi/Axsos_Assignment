const express = require("express");
const app = express();
require("dotenv").config();
require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRoutes = require("./routes/joke.routes");
UserRoutes(app);

const port = process.env.PORT;
app.listen(port, () => console.log(`✅ Listening on port ${port}`));
