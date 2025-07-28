// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
const { getInitials } = require("./snack.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    const result = getInitials("Carlo Costa");
    expect(result).toBe("CC");
});

// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

const { createSlug } = require("./snack.js");

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    const result = createSlug("Hello");
    expect(result).toBe("hello")
})

// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

const { average } = require("./snack.js");

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    const result = average([6, 4])
    expect(result).toBe(5)
})

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlugA sostituisce gli spazi con -."
// 📌 Esempi:
// createSlug("Questo è un test") →  

const { createSlugA } = require("./snack.js");

test("La funzione createSlugA sostituisce gli spazi con -.", () => {
    const result = createSlugA("Questo è un test")
    expect(result).toBe("Questo-è-un-test")
})


// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

const { isPalindrome } = require("./snack.js");

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("anna")).toBe(true);
    expect(isPalindrome("ciao")).toBe(false);

});
