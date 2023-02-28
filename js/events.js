import { getApi } from './functions.js';
import { newQuote } from './functions.js';


window.addEventListener('load', getApi);

quoteBtn.addEventListener('click', function() {
  newQuote();
});
