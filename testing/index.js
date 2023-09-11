const lotrSdk = require('lotr-sdk');

lotrSdk.getAllMovies().then((movies) => {
  console.log(movies);
});

lotrSdk.getMovieById('5cd95395de30eff6ebccde57').then((movie) => {
  console.log(movie); //The Hobbit Series
});

lotrSdk.getQuotesByMovieId('5cd95395de30eff6ebccde57').then((quotes) => {
  console.log(quotes); //The Hobbit Series
});

lotrSdk.getAllQuotes().then((quotes) => {
  console.log(quotes);
});

lotrSdk.getQuoteById('5cd96e05de30eff6ebcce844').then((quotes) => {
  console.log(quotes); //Saruman! Your staff is broken!
});
