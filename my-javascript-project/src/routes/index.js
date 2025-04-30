import express from 'express';

const router = express.Router();

// Define a sample route
router.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

// Define other routes here
router.get('/about', (req, res) => {
    res.send('About this API');
});

// Export the router
export default router;