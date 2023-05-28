const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const apartment = require('./routes/apartment');
const building = require('./routes/building');
const user = require('./routes/user');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/error');
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' });

connectDB()

const app = express();

// parse application/json
app.use(bodyParser.json())

app.use(logger)
app.use(errorHandler)

app.use('/apartment', apartment)
app.use('/building', building)
app.use('/user', user)

const PORT = process.env.PORT || 5001

const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`)
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`)
    server.close(() => process.exit(1))
})