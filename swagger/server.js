const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('./swaggerDefinition'); // Adjust the path based on your project structure

const app = express();
const port = 3000; // Choose a port



// Swagger setup
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js', './swaggerDefinition.js'], // Specify API routes and Swagger definition
};

const swaggerSpec = swaggerJSDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define your routes and other server logic here

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  const ipAddress = req.query.ip; // Extract IP address from the query parameters

  // Use the userId and ipAddress as needed (e.g., to check if the player with the same IP has played before)
  // Implement your game logic here

  res.send('Game Link Clicked');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});