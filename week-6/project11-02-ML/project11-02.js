'use strict';
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Melissa Lutz
      Date:   7/4/2025

      Filename: project11-02.js
*/

let postalCode = document.getElementById('postalCode');
let place = document.getElementById('place');
let region = document.getElementById('region');
let country = document.getElementById('country');

postalCode.onblur = function () {
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Clear current output
  place.value = '';
  region.value = '';

  // Fetch data from Zippopotam.us API
  fetch(`http://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Invalid postal code or country.');
      }
      return response.json();
    })
    .then((json) => {
      place.value = json.places[0]['place name'];
      region.value = json.places[0]['state abbreviation'];
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
};
