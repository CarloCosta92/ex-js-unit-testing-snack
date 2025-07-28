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











module.exports = {
    getInitials,
    createSlug,
    average
};
