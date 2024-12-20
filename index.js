const fs = require("fs");
const filename = process.argv[2] || 'sample_input/input1.txt';
const { COMMANDS } = require("./CONSTANTS");
const { MetroStation } = require('./MetroStation');
const { parseInputData } = require("./utils");

function cardOperations(command) {
    const line = command.trim().split(' ');
    const [INSTRUCTION] = line;

    const metro = new MetroStation();

    switch (INSTRUCTION) {
        case COMMANDS.BALANCE:
            return metro.applyCardOperation(line);
        case COMMANDS.CHECK_IN:
            return metro.handleCheckIn(line);
        case COMMANDS.PRINT_SUMMARY:
            return metro.printSummary();
        default:
            return console.log("Wrong INFO");
    }
}

fs.readFile(filename, "utf8", (err, data) => {
    if (err) throw err;

    const inputLines = parseInputData(data);

    if (!inputLines.length) {
        console.log("No Inputs");
        return;
    }

    inputLines.forEach((command) => {
        cardOperations(command);
    });
});

module.exports = { MetroStation }