"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuoteById = exports.getQuotes = exports.getQuotesByMovieId = exports.getMovieById = exports.getMovies = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://the-one-api.dev/v2';
const ACCESS_TOKEN = 'LrzN3JnAO8C4_Z4-ot9G';
axios_1.default.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
function getMovies() {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/movie`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getMovies = getMovies;
function getMovieById(id) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/movie/${id}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getMovieById = getMovieById;
function getQuotesByMovieId(id) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/movie/${id}/quote`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getQuotesByMovieId = getQuotesByMovieId;
function getQuotes() {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/quote`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getQuotes = getQuotes;
function getQuoteById(id) {
    return new Promise((resolve, reject) => {
        axios_1.default
            .get(`${API_URL}/quote/${id}`)
            .then((resp) => {
            resolve(resp.data);
        })
            .catch(reject);
    });
}
exports.getQuoteById = getQuoteById;
exports.default = { getMovies, getMovieById, getQuotesByMovieId, getQuotes, getQuoteById };
