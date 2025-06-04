/*
  Pragmatic JavaScript
  Chapter 1
  Programming Assignment

  Author:Melissa Lutz
  Date:6/03/2025
  Filename:script.js
*/

'use strict';

function createCharacter(name, gender, characterClass) {
  // TODO: Implement this function
  return {
    getName: () => name,
    getGender: () => gender,
    getClass: () => characterClass,
  };
}

document.getElementById('generateHero').addEventListener('click', function (e) {
  e.preventDefault();

  // TODO: Get form values
  const name = document.getElementById('heroName').value.trim();
  const gender = document.getElementById('heroGender').value;
  const charClass = document.getElementById('heroClass').value;

  // TODO: Create character
  const newCharacter = createCharacter(name, gender, charClass);

  // TODO: Display character information
  const outputContainer = document.getElementById('characterOutput');
  outputContainer.innerHTML = ''; // Clear previous content

  const heading = document.createElement('h2');
  heading.textContent = 'Your Hero';
  outputContainer.appendChild(heading);

  const namePara = document.createElement('p');
  namePara.textContent = `Name: ${newCharacter.getName()}`;
  outputContainer.appendChild(namePara);

  const genderPara = document.createElement('p');
  genderPara.textContent = `Gender: ${newCharacter.getGender()}`;
  outputContainer.appendChild(genderPara);

  const classPara = document.createElement('p');
  classPara.textContent = `Class: ${newCharacter.getClass()}`;
  outputContainer.appendChild(classPara);

  outputContainer.style.display = 'block';
});
