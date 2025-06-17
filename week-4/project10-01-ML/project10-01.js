'use strict';
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: Melissa Lutz
      Date: 6/17/2025

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById('puzzleBoard');
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48; i++) {
  intList[i] = i + 1;
}
intList.sort(function () {
  return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
  let piece = document.createElement('img');
  piece.src = 'piece' + intList[i] + '.png';
  let rowNum = Math.ceil((i + 1) / 8);
  let colNum = i + 1 - (rowNum - 1) * 8;
  piece.style.top = (rowNum - 1) * 98 + 7 + 'px';
  piece.style.left = (colNum - 1) * 98 + 7 + 'px';
  piece.draggable = false; // override the default draggability of images
  puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll('div#puzzleBoard img');

// Add pointerdown event listeners to all pieces
for (let i = 0; i < pieces.length; i++) {
  pieces[i].addEventListener('pointerdown', grabPiece);
}

// grabPiece function
function grabPiece(e) {
  pointerX = e.clientX;
  pointerY = e.clientY;

  const piece = e.target;
  piece.style.touchAction = 'none';
  zCounter++;
  piece.style.zIndex = zCounter;

  pieceX = piece.offsetLeft;
  pieceY = piece.offsetTop;

  piece.addEventListener('pointermove', movePiece);
  piece.addEventListener('pointerup', dropPiece);
}

// movePiece function
function movePiece(e) {
  const diffX = e.clientX - pointerX;
  const diffY = e.clientY - pointerY;

  const piece = e.target;
  piece.style.left = pieceX + diffX + 'px';
  piece.style.top = pieceY + diffY + 'px';
}

// dropPiece function
function dropPiece(e) {
  const piece = e.target;
  piece.removeEventListener('pointermove', movePiece);
  piece.removeEventListener('pointerup', dropPiece);
}
