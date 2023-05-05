get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {$('UL#list_movies').append(...data.results.map(movies => `<li>${movies.title}</li>`));});
