var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8081;
var router = express.Router();

router.post('/login/', function (req, res) {
    let tokenResult = req.body.token;
    res.header('token', tokenResult)
    res.json({ token: tokenResult });
});

app.use('/api', router);

app.listen(port);
console.log('Server work on port ' + port);
