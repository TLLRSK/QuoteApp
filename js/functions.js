import axios from "../node_modules/axios/dist/esm/axios.js";

const apiURL = 'https://api.quotable.io/random';

//get data from api and build quote
const getApi = () => {
    axios.get(apiURL)
      .then(response => {
        const contentTemplate = `
          <p class="quoteapp__content xl">${response.data.content}"</p>
        `
        const authorTemplate = `
          <p class="quoteapp__author xl">- ${response.data.author}</p>
        `
        quoteContent.innerHTML = contentTemplate;
        quoteAuthor.innerHTML = authorTemplate
        
        quoteMain.classList.add('show');
      })
}

//build new quote
const newQuote = () => {
  quoteMain.classList.add('show');
    quoteMain.classList.add('hide');
    quoteMain.classList.remove('show');
    setTimeout(() => {
      quoteMain.classList.remove('hide');
      setTimeout(() => {
        getApi();
      },200);
    },500);
}

export { getApi };
export { newQuote };