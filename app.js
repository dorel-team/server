"use strict";
var express = require('express');
var PORT = 5001;
var api = require('./src/routes/api.ts');
var app = express();
app.use('/', api);
app.listen(PORT, function () {
    console.log("Serverul merge pe portul " + PORT);
});
