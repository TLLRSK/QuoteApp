import { getApi } from './functions.js';
import { newQuote } from './functions.js';

// Vars
const quoteMain = document.querySelector('.quoteapp__main');
const quoteContent = document.querySelector('.quoteapp__content');
const quoteAuthor = document.querySelector('.quoteapp__author');
const quoteBtn = document.querySelector('.quoteapp__btn');

// Para evitar que el otro archivo depende de cosas del main, se lo paso como parametros
window.addEventListener('load', () => getApi(quoteContent, quoteAuthor, quoteMain));
quoteBtn.addEventListener('click', () => newQuote(quoteContent, quoteAuthor, quoteMain));
