// Con Vite, no hace falta colocar la ruta al modulo, ya te permite importar lo que quieras
// Tambien, al descargar el proyecto no estaba axios en la lista de dependencias del package.json
// deberia guardartela automaticamente si has hecho npm install axios
import axios from 'axios';

// Guay esto de dejarte la url fuera.
// Ya para nota, puedes configurar la url base de axios para luego no tener que repetirla
// https://axios-http.com/docs/config_defaults
const apiURL = 'https://api.quotable.io/random';

//get data from api and build quote
export const getApi = (quoteContent, quoteAuthor, quoteMain) => {
    axios.get(apiURL)
      .then(response => {
        /* Esto podrias parametrizarlo.
        Siempre que veas que el codigo es muy parecido en dos sitios, piensa en sacarlo a funcion
        const getTemplate = (data, key) => `<p class="quoteapp__${key} xl">${data[key]}"</p>`

        const contentTemplate = getTemplate(response.data, 'content');
        const authorTemplate = getTemplate(response.data, 'author');
        */
        const contentTemplate = `
          <p class="quoteapp__content xl">${response.data.content}"</p>
        `
        const authorTemplate = `
          <p class="quoteapp__author xl">- ${response.data.author}</p>
        `
        // Esto no se lo que es en este archivo, tendrias que importartelo del otro o prepararlo parametrizado
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
    // 🔥
    setTimeout(() => {
      quoteMain.classList.remove('hide');
      setTimeout(() => {
        getApi(quoteContent, quoteAuthor, quoteMain);
      },200);
    },500);
}

// puedes poner los exports arriba en las funciones, o combinar estos
// export { getApi, newQuote };