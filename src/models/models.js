"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
exports.favoriteSchema = new Schema({
    id_serial: String,
    user: String
});
exports.vizualizateSchema = new Schema({
    user: String,
    id_favorit: Array,
    id_vizualizat: Array,
    poster: [{
            id_serial: String,
            path: String
        }],
});
exports.rezervaSchema = new Schema({
    user: String,
    id_favorit: Array,
    id_vizualizat: Array,
    poster: [{
            id_serial: String,
            path: String
        }],
});
exports.serialSchema = new Schema({
    id_serial: String,
    nume_serial: String,
    descriere: String,
    data_primei_difuzari: Date,
    ultima_difuzare: Date,
    poster_serial: String,
    viitorul_episod: Object,
    sezoane: [{
            id_sezon: String,
            nr_sezon: String,
            data_aparitie_sezon: String,
            poster_sezon: String,
            episoade: [{
                    nr_episod: String,
                    nr_sezon: String,
                    id_episod: String,
                    nume_episod: String,
                    data_aparitiei: Date
                }]
        }],
    status: String
});
var Dorel = {
    plmm: any = 1,
    ion1: function () {
        console.log('merge1: ', this.plmm);
    },
    ion2: function () {
        console.log('merge2');
    }
};
// module.exports.serialeFavorite = mongoose.model('SerialFavorit', favoriteSchema, 'seriale_favorite')
// module.exports.vizualizat = mongoose.model('Vizualizat', vizualizateSchema, 'Vizualizate')
// module.exports.serialSchema = mongoose.model('serial', serialSchema, 'Seriale')
// module.exports.rezervaSchema = mongoose.model('rezerva', rezervaSchema, 'Rezerva')
