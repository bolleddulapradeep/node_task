function parseInputData(input) {
    return input
        .toString()
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);
}

module.exports = { parseInputData }