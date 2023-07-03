import axios from 'axios';

const apiURL = 'https://api.quotable.io/random';

//get data from api and build quote
export const getApi = (quoteContent, quoteAuthor, quoteMain) => {
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
export const newQuote = (quoteContent, quoteAuthor, quoteMain) => {
  quoteMain.classList.add('show');
    quoteMain.classList.add('hide');
    quoteMain.classList.remove('show');
    setTimeout(() => {
      quoteMain.classList.remove('hide');
      setTimeout(() => {
        getApi(quoteContent, quoteAuthor, quoteMain);
      },200);
    },500);
}