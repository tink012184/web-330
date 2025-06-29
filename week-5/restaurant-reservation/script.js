/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author:Melissa Lutz
  Date:6/29/2025
  Filename:script.js
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 2, isReserved: false },
  { tableNumber: 3, capacity: 6, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  // Add your code here
  const table = tables.find((t) => t.tableNumber === parseInt(tableNumber));

  if (!table) {
    callback(`Table ${tableNumber} does not exist.`);
    return;
  }

  if (table.isReserved) {
    callback(`Sorry, Table ${tableNumber} is already reserved.`);
  } else {
    table.isReserved = true;
    setTimeout(() => {
      callback(`Success! Table ${tableNumber} has been reserved.`);
    }, time);
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById('reservationForm')
  .addEventListener('submit', function (e) {
    // Add your code here
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const tableNumber = document.getElementById('tableNumber').value.trim();

    if (name === '' || tableNumber === '') {
      document.getElementById('message').textContent =
        'Please fill out both fields.';
      return;
    }

    reserveTable(
      tableNumber,
      function (message) {
        showMessage(`${name}, ${message}`);
      },
      2000
    ); // 2-second delay
  });

function showMessage(msg) {
  const messagePara = document.getElementById('message');
  if (messagePara) {
    messagePara.textContent = msg;
  } else {
    alert(msg); // fallback if element isn't found
  }
}
