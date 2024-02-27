import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  const planetWithMoon = data.planets
  .filter(function(info) {
    return info.hasOwnProperty('moons');
  })
  .find(function(info){
    return info.moons.includes(moonName);
  });
  return planetWithMoon.name;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

// const planetNameWith = data.planets
// .filter(function(planet) {
//   return (planet.moons && planet.moons.includes(moonName));
// })
// .map(function(planet) {
//   return planet.name;
// });

// return planetNameWith[0];