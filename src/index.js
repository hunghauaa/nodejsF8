const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');


const path = require('path');
const route = require('./routes/index')
const db = require('./config/db/index')
var app = express();
db.connect();



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // fo

app.engine('hbs', exphbs({
  extname: '.hbs',
  helpers:{
    sum : (a,b) => a+b
  }
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resources/views'));

const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));



route(app);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});