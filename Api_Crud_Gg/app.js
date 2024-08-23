require('dotenv').config();
const express = require('express');
const sessionConfig = require('./config/session');
const securityMiddleware = require('./middleware/security');
const rateLimiter = require('./middleware/limits');
const plantasRoutes = require('./routes/plantas');
const apiKeyMiddleware = require('./middleware/apikeymiddlew');

const app = express();

// Middlewares
app.use(express.json());
securityMiddleware(app);
app.use(rateLimiter);
app.use(sessionConfig);

// Rutas
// app.use('/plantas', plantasRoutes);

app.use('/api/plantas', apiKeyMiddleware, plantasRoutes);

// Rutas para generar clave API (no usar el middleware de clave API aquí)
const apiKeysRoutes = require('./routes/apikeyroutes');
app.use('/api/api-key', apiKeysRoutes); // Ajustar la ruta a '/api/api-key'

module.exports = app;
