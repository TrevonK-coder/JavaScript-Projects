// ============================================================
//  Project 2: JavaScript Functions  –  main.js
//  Author  : TrevonK-coder
//  Purpose : Demonstrate functions, the += operator, DOM
//            interaction, and HTML-element-to-function calls
// ============================================================


// ────────────────────────────────────────────────────────────
//  SECTION A – Score Tracker
//  Demonstrates: function declaration, += operator, DOM update
// ────────────────────────────────────────────────────────────

// currentScore is a global variable that persists between function calls.
// We use += to add points to it each time addScore() is called.
var currentScore = 0;

// scoreLog keeps a running text history of every action taken.
// += is used to append a new line to it each time points are added.
var scoreLog = "";

/**
 * addScore(points)
 * ----------------
 * Accepts a number of points, adds them to the running total
 * using the += operator, then updates the page display.
 *
 * @param {number} points – the points to add (e.g. 1, 5, 10)
 */
function addScore(points) {
  // += adds 'points' to the existing currentScore instead of replacing it.
  // This is the core required use of the += operator.
  currentScore += points;

  // Build a log entry string and append it to scoreLog with +=
  var timestamp = new Date().toLocaleTimeString();
  scoreLog += "+" + points + " pts  →  Total: " + currentScore + "  [" + timestamp + "]\n";

  // Grab the DOM elements that display the score and log
  var display = document.getElementById("score-display");
  var logBox  = document.getElementById("score-log");

  // Update the score number on the page
  display.textContent = currentScore;

  // Brief CSS animation – add class, then remove it after 200 ms
  display.classList.add("bump");
  setTimeout(function() { display.classList.remove("bump"); }, 200);

  // Write the updated log into the output box on the page
  logBox.textContent = scoreLog;
}

/**
 * resetScore()
 * ------------
 * Resets the score and log back to their starting values.
 */
function resetScore() {
  // Reset both variables to their initial values
  currentScore = 0;
  scoreLog     = "";

  // Reflect the reset on the page
  document.getElementById("score-display").textContent = "0";
  document.getElementById("score-log").textContent     = "Score reset.";
}


// ────────────────────────────────────────────────────────────
//  SECTION A (continued) – Sentence Builder
//  Demonstrates: += on a string, array storage, function calls
// ────────────────────────────────────────────────────────────

// sentence starts as an empty string.
// We will grow it one word at a time using +=.
var sentence = "";

// wordCount tracks how many words have been added (used as a label)
var wordCount = 0;

/**
 * addWord()
 * ---------
 * Reads the current value of the word input, then uses +=
 * to append it to the 'sentence' string variable.
 * Displays the growing sentence on the page.
 */
function addWord() {
  // Grab the input element and read its value
  var input = document.getElementById("word-input");
  var word  = input.value.trim();   // .trim() removes accidental spaces

  // Guard: do nothing if the field is empty
  if (word === "") {
    document.getElementById("sentence-output").textContent = "⚠️  Please type a word first.";
    return;
  }

  // Increment the word counter
  wordCount += 1;   // += used on a number – same concept as the score tracker

  // Append the word to the sentence string using +=
  // A space is added before each new word (except the very first)
  if (sentence === "") {
    sentence += word;           // first word — no leading space needed
  } else {
    sentence += " " + word;    // subsequent words — prepend a space
  }

  // Show the current sentence on the page
  var output = document.getElementById("sentence-output");
  output.textContent = "(" + wordCount + " word" + (wordCount === 1 ? "" : "s") + ")  \"" + sentence + "\"";

  // Clear the input so the user can type the next word immediately
  input.value = "";
  input.focus();
}

/**
 * clearSentence()
 * ---------------
 * Resets the sentence builder back to its empty state.
 */
function clearSentence() {
  // Reset both tracking variables
  sentence  = "";
  wordCount = 0;

  // Update the display
  document.getElementById("sentence-output").textContent = "Sentence cleared.";
  document.getElementById("word-input").value = "";
  document.getElementById("word-input").focus();
}


// ────────────────────────────────────────────────────────────
//  SECTION B – Shopping Cart
//  Demonstrates: += on a running total, object literals, loops
// ────────────────────────────────────────────────────────────

// cartItems is an array that stores every added item as an object.
var cartItems = [];

// cartTotal accumulates the price of every item using +=.
var cartTotal = 0;

/**
 * addItem()
 * ---------
 * Reads the item name and price from the form inputs.
 * Uses += to add the price to cartTotal.
 * Rebuilds the cart table display after each addition.
 */
function addItem() {
  // Read the current values from the two input fields
  var nameInput  = document.getElementById("item-name");
  var priceInput = document.getElementById("item-price");

  var itemName  = nameInput.value.trim();
  var itemPrice = parseFloat(priceInput.value);  // convert string → number

  // Guard: validate that both fields have usable values
  if (itemName === "" || isNaN(itemPrice) || itemPrice < 0) {
    alert("Please enter a valid item name and a positive price.");
    return;
  }

  // Create an object to represent the cart item
  var newItem = {
    name  : itemName,
    price : itemPrice
  };

  // Push the new item object into the cartItems array
  cartItems.push(newItem);

  // Use += to add this item's price to the running total.
  // This is the core required use of += in this section.
  cartTotal += itemPrice;

  // Rebuild the cart table to reflect the new state
  renderCart();

  // Clear the input fields so the user can add the next item
  nameInput.value  = "";
  priceInput.value = "";
  nameInput.focus();
}

/**
 * renderCart()
 * ------------
 * Loops through cartItems and rebuilds the HTML table body.
 * Uses += to build up the HTML string row by row.
 */
function renderCart() {
  var tbody = document.getElementById("cart-body");

  // Start with an empty HTML string, then += each row onto it
  var rowsHTML = "";

  // Loop through every item in the array and build a table row
  for (var i = 0; i < cartItems.length; i++) {
    // += appends the new row string to the growing rowsHTML string
    rowsHTML += "<tr>" +
      "<td>" + (i + 1) + "</td>" +
      "<td>" + cartItems[i].name + "</td>" +
      "<td>$" + cartItems[i].price.toFixed(2) + "</td>" +
      "</tr>";
  }

  // Inject the completed HTML string into the table body at once
  tbody.innerHTML = rowsHTML;

  // Update the total cell using toFixed(2) to show two decimal places
  document.getElementById("cart-total").textContent = "$" + cartTotal.toFixed(2);
}


// ────────────────────────────────────────────────────────────
//  SECTION C – Multiplication Table Generator
//  Demonstrates: nested loops, += building an HTML string,
//                function parameter, DOM innerHTML injection
// ────────────────────────────────────────────────────────────

/**
 * buildTable()
 * ------------
 * Reads a size n from the input, then generates an n×n
 * multiplication table as an HTML string using += in two
 * nested loops, and injects it into the page.
 */
function buildTable() {
  // Read the desired table size from the input field
  var sizeInput = document.getElementById("table-size");
  var n = parseInt(sizeInput.value);   // parse as an integer

  // Guard: clamp n between 2 and 12 to keep the table readable
  if (isNaN(n) || n < 2)  n = 2;
  if (n > 12)              n = 12;

  // tableHTML will hold the entire table markup, built one piece at a time.
  // Starting with an empty string, we += each row and cell as we go.
  var tableHTML = "";

  // Outer loop: iterate over each row (1 through n)
  for (var row = 1; row <= n; row++) {
    // Begin building this row's HTML string
    tableHTML += "<div class='mult-row'>";

    // Inner loop: iterate over each column (1 through n)
    for (var col = 1; col <= n; col++) {
      var product = row * col;   // arithmetic expression for each cell

      // Decide whether this cell is a header (diagonal) or a body cell
      var cellClass = (row === col) ? "mult-cell header" : "mult-cell body";

      // += appends this cell's markup to the row string
      tableHTML += "<div class='" + cellClass + "'>" + product + "</div>";
    }

    // Close the row div – appended with +=
    tableHTML += "</div>";
  }

  // Inject the fully built HTML string into the output container
  document.getElementById("mult-output").innerHTML = tableHTML;
}

// ────────────────────────────────────────────────────────────
//  INITIALISATION – run on page load
// ────────────────────────────────────────────────────────────

// Build the default 5×5 multiplication table immediately when the page loads,
// so the section is not empty on first visit.
buildTable();
