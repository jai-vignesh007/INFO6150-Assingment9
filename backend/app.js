// app.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., uploaded images)
app.use('/images', express.static('images'));

// Mount Swagger UI at /api-docs using the swagger.json file
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Mount user routes under the /user path
app.use('/', userRoutes);



module.exports = app;
