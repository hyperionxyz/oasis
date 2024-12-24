// This file is the entry point of the application. It will contain the main logic for your application, such as initializing the server or application logic.

import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Oasis project!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});