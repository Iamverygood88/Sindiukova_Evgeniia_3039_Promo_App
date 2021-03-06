const express = require('express');
const path = require('path');
const hbs = require('hbs');
const sql = require('./utils/sql');
const port = process.env.PORT || 3000;

const app = express();

//tell express to use handlebars engine to render data; 
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); 


app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname + '/views/index.html'));
    res.render('home');
})

app.get('/contact', (req, res) => {
    // res.sendFile(path.join(__dirname + '/views/contact.html'));
    res.render('contact')
})

// app.get('/users', (req, res) => {

//    sql.getConnection((err, connection) => {
//        if (err) {
//            return console.log(err.message);

//        }

//        let query = `SELECT * FROM tbl_card`;
//        sql.query(query, (err, rows) => {
//            connection.release();
//            if(err) {
//                return console.log(err.message) }
//            console.log(rows);

//            res.render('user', rows[0])
//        })
//    })
    
// })

// app.get('/portfolio', (req, res) => {
//     res.send('on the portfolio page!');
// })


app.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
