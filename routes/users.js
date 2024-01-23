const express = require('express');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             example: [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]
 */
router.get('/users', (req, res) => {
  // Implementation to retrieve and send a list of users
  const users = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
  res.json(users);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             example: { id: 1, name: 'John Doe' }
 */
router.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Implementation to retrieve and send user details by ID
  const user = { id: userId, name: 'John Doe' };
  res.json(user);
});

// Other user-related routes go here...

module.exports = router;
