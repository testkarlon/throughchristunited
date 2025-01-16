// script.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let messages = [];

app.post('/send-message', (req, res) => {
    const message = req.body.message;
    if (message) {
        messages.push(message);
        res.status(200).send({ status: 'Message sent', messages });
    } else {
        res.status(400).send({ status: 'Message cannot be empty' });
    }
});

app.get('/messages', (req, res) => {
    res.status(200).send(messages);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
