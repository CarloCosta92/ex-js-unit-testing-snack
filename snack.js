function getInitials(fullName) {
    return fullName
        .split(" ")
        .map(word => word[0].toUpperCase())
        .join("");
}

function createSlug(str) {
    return str.toLowerCase();
}











module.exports = {
    getInitials,
    createSlug
};
