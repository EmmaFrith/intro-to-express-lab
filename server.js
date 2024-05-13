
const express = require('express')

const app = express()

app.listen(3000, () => {
    console.log('Listening on port 3000')
})

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});


app.get('/greetings/:name', (req, res) => {
    res.send(`Hello ${req.params.name}`);
});


app.get('/roll/:itemNumber', (req, res) => {
    res.send(`<h1>Item ${req.params.itemNumber}</h1>`);
});