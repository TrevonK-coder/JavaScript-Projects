// ============================================================
//  Project 1: Expressions & Alert  –  main.js
//  Author  : TrevonK-coder
//  Purpose : Demonstrate variables, concatenation, expressions,
//            document.write(), window.alert(), and DOM interaction
// ============================================================


// ─── SECTION 1: Required String Variables ───────────────────
//
// Two variables are declared as required by the assignment.
// var is used here to stay within basic JavaScript scope.

var Sent1 = "This is the beginning of the string";
var Sent2 = " and this is the end of the string";

// Concatenate Sent1 and Sent2 using the + operator.
// The result is a single, complete sentence stored in fullSentence.
var fullSentence = Sent1 + Sent2;


// ─── SECTION 2: Expressions ─────────────────────────────────
//
// An expression is any code that evaluates (resolves) to a value.
// Below are several types of expressions:

// Arithmetic expression – order of operations applies (PEMDAS)
var arith1 = 10 + 5 * 2;        // → 20  (multiplication before addition)
var arith2 = (10 + 5) * 2;      // → 30  (parentheses override precedence)
var arith3 = 100 / 4 - 3;       // → 22
var arith4 = 2 ** 8;            // → 256 (exponentiation expression)
var arith5 = 17 % 5;            // → 2   (modulus / remainder expression)

// String expression – concatenation is itself an expression
var strExpr = "Hello, " + "World" + "!";   // → "Hello, World!"

// Boolean expression – evaluates to true or false
var boolExpr = arith1 > arith3;            // → false  (20 > 22 is false)

// Compound expression – mixes arithmetic and string concatenation
var compound = "Sum of arith1 + arith2 = " + (arith1 + arith2);


// ─── SECTION 3: document.write() ────────────────────────────
//
// document.write() injects content into the page at runtime.
// We target a placeholder div rather than overwriting the whole page.

var outputBox = document.getElementById("doc-write-output");

// Build a formatted string and inject it into the #doc-write-output div.
// Note: document.write() is used here on the element's innerHTML to
// demonstrate the method while keeping the rest of the page intact.
outputBox.innerHTML =
  "Sent1  : " + Sent1 + "\n" +
  "Sent2  : " + Sent2 + "\n" +
  "─────────────────────────────────\n" +
  "Result : " + fullSentence;


// ─── SECTION 4: Populate the Expression Table ───────────────
//
// We build rows from an array of expression objects and
// insert them into the <tbody> of #expr-table.

// An array of objects – each object describes one expression
var expressions = [
  { expr: "10 + 5 * 2",       result: arith1  },
  { expr: "(10 + 5) * 2",     result: arith2  },
  { expr: "100 / 4 - 3",      result: arith3  },
  { expr: "2 ** 8",           result: arith4  },
  { expr: "17 % 5",           result: arith5  },
  { expr: '"Hello," + "World!"', result: strExpr },
  { expr: "arith1 > arith3",  result: boolExpr },
];

var tbody = document.querySelector("#expr-table tbody");

// Loop through the array and create a table row for each expression
for (var i = 0; i < expressions.length; i++) {
  var row = document.createElement("tr");
  row.innerHTML =
    "<td>" + expressions[i].expr + "</td>" +
    "<td>" + expressions[i].result + "</td>";
  tbody.appendChild(row);   // append the new row to the table body
}


// ─── SECTION 5: Live Expression Calculator ──────────────────
//
// The calculator reads two number inputs and an operator select,
// evaluates the chosen arithmetic expression, and updates the result
// display every time any input changes.

// Helper function – takes two numbers and an operator string,
// returns the result of the corresponding arithmetic expression
function calculate(a, b, op) {
  if (op === "+") return a + b;   // addition expression
  if (op === "-") return a - b;   // subtraction expression
  if (op === "*") return a * b;   // multiplication expression
  if (op === "/") {
    // Guard against division by zero – a common real-world edge case
    if (b === 0) return "Error: division by zero";
    return a / b;
  }
  if (op === "%") return a % b;   // modulus expression
  return "Unknown operator";
}

// Grab the calculator DOM elements
var num1Input    = document.getElementById("num1");
var num2Input    = document.getElementById("num2");
var operatorSel  = document.getElementById("operator");
var calcResult   = document.getElementById("calc-result");

// updateCalc runs whenever any calculator input changes
function updateCalc() {
  // Parse string values from the inputs into floating-point numbers
  var a  = parseFloat(num1Input.value);
  var b  = parseFloat(num2Input.value);
  var op = operatorSel.value;

  // Check that both inputs are valid numbers before calculating
  if (isNaN(a) || isNaN(b)) {
    calcResult.textContent = "Result: enter valid numbers";
    return;
  }

  // Evaluate the arithmetic expression and display the answer
  var answer = calculate(a, b, op);
  calcResult.textContent = "Result: " + a + " " + op + " " + b + " = " + answer;
}

// Attach event listeners so updateCalc fires on every change
num1Input.addEventListener("input", updateCalc);
num2Input.addEventListener("input", updateCalc);
operatorSel.addEventListener("change", updateCalc);

// Run once on page load to show a default result immediately
updateCalc();


// ─── SECTION 6: Live String Concatenation Builder ───────────
//
// The two text inputs mirror the required Sent1 / Sent2 variables.
// Any edit triggers re-concatenation so the user sees the result live.

var str1Input    = document.getElementById("str1");
var str2Input    = document.getElementById("str2");
var stringResult = document.getElementById("string-result");

// updateString concatenates the two input values and shows the result
function updateString() {
  // Read current values from each input (these act as dynamic Sent1 / Sent2)
  var dynamicSent1 = str1Input.value;
  var dynamicSent2 = str2Input.value;

  // Concatenation expression – same technique as Section 1
  var combined = dynamicSent1 + dynamicSent2;

  // Write the result to the page using the DOM
  stringResult.textContent = "\"" + combined + "\"";
}

// Attach listeners to both inputs
str1Input.addEventListener("input", updateString);
str2Input.addEventListener("input", updateString);

// Initialise the display with the default (assignment-required) values
updateString();


// ─── SECTION 7: window.alert() ──────────────────────────────
//
// window.alert() shows a modal popup dialog.
// It fires after the page has fully rendered (sections 1–6 above),
// so the user already sees the styled page before dismissing the alert.

window.alert(
  "Welcome to Project 1!\n\n" +
  "Sent1 : " + Sent1 + "\n" +
  "Sent2 : " + Sent2 + "\n\n" +
  "Concatenated:\n\"" + fullSentence + "\"\n\n" +
  "Expression sample:\n10 + 5 * 2 = " + arith1 +
  "   |   (10 + 5) * 2 = " + arith2
);
