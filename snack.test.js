// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."
const { getInitials } = require("./snack.js");

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    const result = getInitials("Carlo Costa");
    expect(result).toBe("CC");
});