const express = require('express');
const App = express();
const PORT = 3000;

App.use(express.json());

App.get('/', (req, res) => {
    res.send('Hello World!');
});

App.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});