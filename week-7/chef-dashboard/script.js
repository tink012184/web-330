/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author:Melissa Lutz
  Date:7/9/2025
  Filename: chefs.js
*/

'use strict';

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {
    name: 'Chef Maria Lopez',
    specialty: 'Molecular Gastronomy',
    weakness: 'Desserts',
    restaurantLocation: 'New York City',
  },
  {
    name: 'Chef Hiro Tanaka',
    specialty: 'Sushi and Sashimi',
    weakness: 'Pastries',
    restaurantLocation: 'Tokyo, Japan',
  },
  {
    name: 'Chef Giulia Romano',
    specialty: 'Rustic Italian',
    weakness: 'Fusion Cuisine',
    restaurantLocation: 'Rome, Italy',
  },
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve(chefs[0]) : reject('Failed to load Chef 1');
    }, 2000);
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve(chefs[1]) : reject('Failed to load Chef 2');
    }, 3000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.8 ? resolve(chefs[2]) : reject('Failed to load Chef 3');
    }, 4000);
  });
}

// Function to render chef data or error message
function renderChef(result, sectionId) {
  const section = document.getElementById(sectionId);
  if (result.status === 'fulfilled') {
    const chef = result.value;
    section.innerHTML = `
      <h2>${chef.name}</h2>
      <p><strong>Specialty:</strong> ${chef.specialty}</p>
      <p><strong>Weakness:</strong> ${chef.weakness}</p>
      <p><strong>Restaurant Location:</strong> ${chef.restaurantLocation}</p>
    `;
  } else {
    section.innerHTML = `<p class="error">${result.reason}</p>`;
  }
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()]).then(
  (results) => {
    renderChef(results[0], 'chef1');
    renderChef(results[1], 'chef2');
    renderChef(results[2], 'chef3');
  }
);
