import { getApi } from './functions.js';
import { newQuote } from './functions.js';
import { toggleLight } from './functions.js';


window.addEventListener('load', getApi);
window.addEventListener('load', toggleLight);

quoteBtn.addEventListener('click', function() {
  newQuote();
});

lightToggle.addEventListener('click', toggleLight);