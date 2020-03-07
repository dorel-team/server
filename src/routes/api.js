"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var http = require('http');
exports.router = express.Router();
// const mongoose = require('mongoose');
var mongoose_1 = __importDefault(require("mongoose"));
var models_1 = require("../models/models");
// const models = require('../models/models');
var db = "mongodb://localhost:27017/proba";
mongoose_1.default.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, function (err) {
    if (err) {
        console.error('Eroare! ' + err);
    }
    else {
        console.log('Conectat la baza de date!');
    }
});
var proba = new models_1.favoriteSchema({ user: "adi" });
proba.save(function (err) {
    if (err)
        return handleError(err);
    console.log("salvat");
    // saved!
});
models_1.favoriteSchema.find(function (err, element) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(element);
    }
});
exports.router.get('/', function (req, res) {
    res.status(200);
    res.send('ok');
});
exports.router.get('/proba', function (req, res) {
    res.status(200);
    res.send('proba');
});
// module.exports = router;
