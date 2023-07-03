import { getApi } from './functions.js';
import { newQuote } from './functions.js';

// Vars
const quoteMain = document.querySelector('.quoteapp__main');
const quoteContent = document.querySelector('.quoteapp__content');
const quoteAuthor = document.querySelector('.quoteapp__author');
const quoteBtn = document.querySelector('.quoteapp__btn');

window.addEventListener('load', () => getApi(quoteContent, quoteAuthor, quoteMain));
quoteBtn.addEventListener('click', () => newQuote(quoteContent, quoteAuthor, quoteMain));
