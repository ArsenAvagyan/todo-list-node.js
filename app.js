var express  = require('express');
var todoController = require('./controllers/todoController');


var app = express();
app.listen(3000);
app.set('view engine', 'ejs');
app.use(express.static('./public'));
todoController(app);








