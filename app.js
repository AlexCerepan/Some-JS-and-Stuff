const { urlencoded } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({extends: false});
app.set('view engine', 'ejs');

app.use('/NodeJS/assets', express.static('assets'));

app.get('/', (req, res) => {
   res.render('index');
});

app.get('/AboutMe', (req, res) => {
   res.render('AboutMe',{qs: req.query});
});


app.post('/AboutMe', urlencodedParser, (req, res) => {
   console.log(req.body);
   res.render('AboutMe-success', {data: req.body});
});


app.get('/profile/:name', (req, res) => {
   const data = {
      age: 30, 
      job: 'developer',
      freinds: ['Matus', 'Roman', 'Samo']
   }
   res.render('profile', {person: req.params.name, data});
});

app.listen(3000);
