const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet')

require('dotenv').config()
require('./db')

app.use(helmet());
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/user',require('./router'));

app.listen(3000,()=>{
    console.log("World in 3000");
})