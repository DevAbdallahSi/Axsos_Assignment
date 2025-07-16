const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
require("./config/mongoose.config");

const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const UserRoutes = require("./routes/player.route");
UserRoutes(app);
app.get('/', (req, res) => res.send('Hello from server!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));