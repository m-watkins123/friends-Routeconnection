var express = require("express");

var path = require("path");

var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var PORT = 3000;
require('./app/routing/htmlRoutes.js')(app);
app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:%s", PORT);

});
