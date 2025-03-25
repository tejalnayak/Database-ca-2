const express = require('express');

const app = express();
const port = 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running on http://localhost:8000');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});