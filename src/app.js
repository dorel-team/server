"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./routes/api");
var express = require('express');
var PORT = 5001;
var app = express();
app.use('/', api_1.router);
app.listen(PORT, function () {
    console.log("Serverul merge pe portul " + PORT);
});
