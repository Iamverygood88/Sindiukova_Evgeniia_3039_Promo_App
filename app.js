const express = require('express');

const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('hello world!');
})

app.get('/contact', (req, res) => {
    res.send('on the contact page!');
})

app.get('/portfolio', (req, res) => {
    res.send('on the portfolio page!');
})


app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
