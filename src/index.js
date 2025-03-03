const express = require('express');
const pino = require('pino');
const fs = require('fs');
const path = require('path');

// Ensure logs directory exists
const logDirectory = path.join(process.cwd(), 'logs');
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Configure Pino to write logs to a file in /logs directory
const logger = pino(pino.destination(path.join(logDirectory, 'app.log')));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
    logger.info({ method: req.method, url: req.url });
    next();
});

// Basic route
app.get('/', (req, res) => {
    logger.info('Root endpoint accessed');
    res.send('Hello, World!');
});

// Start server
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});