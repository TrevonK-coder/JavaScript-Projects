# JavaScript-Projects

A collection of beginner JavaScript projects created as part of a web development course. Each project lives in its own folder inside **Basic JavaScript Projects** and demonstrates a specific set of core JavaScript concepts.

---

## 📁 Repository Structure

```
JavaScript-Projects/
└── Basic JavaScript Projects/
    ├── Project1_expressions_alert/
    │   ├── index.html
    │   └── main.js
    └── Project2_functions/
        ├── index.html
        └── main.js
```

---

## 🗂️ Projects

### Project 1 — Expressions & Alert
**Folder:** `Basic JavaScript Projects/Project1_expressions_alert/`

An interactive page that demonstrates JavaScript string variables, concatenation, expressions, and the core browser output methods.

**Concepts covered:**
- `window.alert()` — displays a popup message on page load
- `document.write()` — outputs the concatenated sentence to the page
- Two required string variables:
  - `Sent1 = "This is the beginning of the string"`
  - `Sent2 = " and this is the end of the string"`
- String concatenation using the `+` operator
- Arithmetic expressions (PEMDAS, modulus, exponentiation, boolean)
- Live calculator — evaluates arithmetic expressions from user input
- Live string concatenation builder — updates in real time via `addEventListener`
- External script linked with `<script src="main.js">`
- Comments throughout explaining every section of code

---

### Project 2 — Functions
**Folder:** `Basic JavaScript Projects/Project2_functions/`

An interactive multi-section page that demonstrates JavaScript functions, the `+=` operator, DOM manipulation, and event-driven programming.

**Concepts covered:**
- Functions declared with `function` keyword
- HTML elements (`<button onclick="...">`) used to call and display functions
- `+=` operator used in multiple contexts:
  - Accumulating a numeric score (`currentScore += points`)
  - Appending words to a string (`sentence += " " + word`)
  - Running a shopping cart total (`cartTotal += itemPrice`)
  - Building an HTML string in a loop (`tableHTML += "<div>...</div>"`)
- Object literals and arrays to store cart items
- Nested `for` loops to generate a multiplication table
- `parseFloat()`, `parseInt()`, `isNaN()` for input validation
- External script linked with `<script src="main.js">`
- Comments throughout explaining every function and section

---

## 🛠️ Technologies Used

- HTML5
- Vanilla CSS (glassmorphism, CSS custom properties, responsive grid)
- Vanilla JavaScript (ES5 compatible)
- Google Fonts — Inter

---

## 🚀 How to Run

1. Clone or download the repository
2. Open any project's `index.html` directly in your browser — no build step required

---

*Created for course assignments — JavaScript fundamentals track.*