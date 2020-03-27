import { Schema, model } from 'mongoose';

const favoriteSchema: Schema = new Schema({
    id_serial: String,
    user: String
});

const vizualizateSchema: Schema = new Schema({
    user: String,
    id_favorit: Array,
    id_vizualizat: Array,
    poster: [{
        id_serial: String,
        path: String
    }],

});

const rezervaSchema: Schema = new Schema({
    user: String,
    id_favorit: Array,
    id_vizualizat: Array,
    poster: [{
        id_serial: String,
        path: String
    }],

});

const serialSchema: Schema = new Schema({
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



export const serialeFavorite = model('SerialFavorit', favoriteSchema, 'seriale_favorite');
// export const vizualizat = model('Vizualizat', vizualizateSchema, 'Vizualizate')
// export const serialSchema = model('serial', serialSchema, 'Seriale')
// export const rezervaSchema = model('rezerva', rezervaSchema, 'Rezerva')


