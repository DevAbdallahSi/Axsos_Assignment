const express = require("express");
const app = express();
require("dotenv").config();
require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`✅ Listening on port ${port}`));
