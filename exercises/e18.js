/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */
import { maxBy } from '../exercises/e17';

export function getGreatestDiscoveryYear(data) {
  const asteroidsArray = data.asteroids;

  // Calculate the count of asteroid discoveries for each year
  const asteroidDiscoveriesByYear = asteroidsArray.reduce((accumulator, asteroid) => {
    const year = asteroid.discoveryYear;
    accumulator[year] = (accumulator[year] || 0) + 1;
    return accumulator;
  }, {});

  // Find the year with the maximum discoveries
  const discoveryYearsArray = asteroidsArray.map(function(asteroid) {
    return asteroid.discoveryYear;
  });
  
  const maxYear = maxBy(discoveryYearsArray, function(year) {
    return asteroidDiscoveriesByYear[year];
  });
  return maxYear;
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// import { maxBy } from '../exercises/e17';
// export function getGreatestDiscoveryYear(data) {
  
//   const asteroidDiscoveriesByYear = {};

//   // Count asteroid discoveries for each year
//   const asteroidsArray = data.asteroids;
//   for (let i = 0; i < asteroidsArray.length; i++) {
//     const asteroid = asteroidsArray[i];
//     const year = asteroid.discoveryYear;
//     asteroidDiscoveriesByYear[year] = (asteroidDiscoveriesByYear[year] || 0) + 1;
//   }

//   // Find the year with the maximum discoveries
//   let maxYear = null;
//   let maxDiscoveries = 0;

//   for (let year in asteroidDiscoveriesByYear) {
//     const discoveries = asteroidDiscoveriesByYear[year];
    
//     if (discoveries > maxDiscoveries) {
//       maxYear = year;
//       maxDiscoveries = discoveries;
//     }
//   }

//   return maxYear; // Convert maxYear to a number
// }