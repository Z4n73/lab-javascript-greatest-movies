/* eslint no-restricted-globals: 'off' */


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear([...movies]){
  return movies.sort( (a, b) => {
    if (a.year > b.year){
      return 1;
    } else if (a.year < b.year){
      return -1;
    } else if (a.title > b.title){
      return 1;
    } else {
      return -1;
    }
  })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
  return movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.some(genre => genre === 'Drama')).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically([...movies]){
  let orderArr = movies.sort( (a, b) => {
    if (a.title > b.title){
      return 1;
    } else {
      return -1;
    }
  })
  
  return orderArr.slice(0, 20).map(movie => movie.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
  let rates = movies.reduce( (acc, current) => {
    if (typeof current.rate == 'number'){
      return acc + current.rate;
    } else {
      return acc;
    }
  }, 0 );

  if (rates > 0){
    return parseFloat( (rates / movies.length).toFixed(2) );
  }  else {
    return 0;
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  let dramaMovies = movies.filter(movie => movie.genre.some(genre => genre === 'Drama'));
  return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


// BONUS Iteration: Best yearly rate average - Best yearly rate average

