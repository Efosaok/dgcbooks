/*
* This is a DGC books webapp
* By Efosa Okpugie
*/
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('port' , process.env.PORT || 8000);

const routes = require('./routes/index');

app.use('/', routes)

app.listen(app.get('port'), () => {
	console.log('app running on port '+""+app.get('port'));
});
