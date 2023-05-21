const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const apartment = require('./routes/apartment');
const building = require('./routes/building');

dotenv.config({ path: './config/config.env' });

const app = express();

// parse application/json
app.use(bodyParser.json())

app.use('/apartment', apartment)
app.use('/building', building)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

