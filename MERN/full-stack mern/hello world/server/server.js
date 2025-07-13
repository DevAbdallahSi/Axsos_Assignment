const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/person.routes')(app);
require('./config/mongoose.config');

app.listen(port, () => console.log(`🚀 Server is running on port ${port}`));
