# JavaScript-Projects

A collection of JavaScript projects created as part of a web development course. Each project demonstrates core JavaScript concepts with interactive, visually polished UIs.

🔗 **Live Portfolio:** [trevonk-coder.github.io/myCV](https://trevonk-coder.github.io/myCV/)

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

## 🗂️ Related Projects (Other Repos)

### One-Page Website — Lightbox Modal Gallery
**Repo:** [`HTML-and-CSS-Projects`](https://github.com/TrevonK-coder/HTML-and-CSS-Projects)
**Folder:** `One-Page Website/`

A single-page website upgraded with a fully functional JavaScript lightbox modal gallery.

**JavaScript concepts covered:**
- `openLightbox(index)`, `closeLightbox()`, `navigate(direction)`, `loadImage(index)` — four coordinated functions
- `Array.from(querySelectorAll(...))` — building an image array from the DOM
- `classList.add("open")` / `classList.remove("open")` — toggling modal visibility
- `document.body.style.overflow` — locking scroll while modal is open
- `addEventListener("keydown", ...)` — keyboard navigation (← → Esc)
- Backdrop click-to-close via `event.target` check
- CSS `@keyframes` animations triggered by JS class changes

---

## 🛠️ Technologies Used

- HTML5
- Vanilla CSS (glassmorphism, CSS custom properties, responsive grid, animations)
- Vanilla JavaScript (ES5/ES6 compatible)
- Google Fonts — Inter

---

## 🚀 How to Run

1. Clone or download the repository
2. Open any project's `index.html` directly in your browser — no build step required

---

*Created for course assignments — JavaScript fundamentals track.*