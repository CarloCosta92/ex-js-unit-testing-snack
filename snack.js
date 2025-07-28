function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");
}

function createSlug(str) {
    return str.toLowerCase();
}

function average(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

function createSlugA(stringa) {
    return stringa.replace(/\s+/g, "-")
}

function isPalindrome(str) {
    return str === str.split("").reverse().join("");
}

function createSlugB(title) {
    if (!title || title.trim() === "") {
        throw new Error("Titolo non valido");
    }
    return title
}

function findPostById(posts, id) {
    return posts.find(post => post.id === id);
}












module.exports = {
    getInitials,
    createSlug,
    average,
    createSlugA,
    isPalindrome,
    createSlugB,
    findPostById,

};
