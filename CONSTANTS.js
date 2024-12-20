const COMMANDS = {
    BALANCE: 'BALANCE',
    CHECK_IN: 'CHECK_IN',
    PRINT_SUMMARY: 'PRINT_SUMMARY'
}

const FAIRS = {
    ADULT: 200,
    SENIOR_CITIZEN: 100,
    KID: 50
}

const DISCOUNT_PERCENT = 50

const TAX = 2

module.exports = { COMMANDS, FAIRS, DISCOUNT_PERCENT, TAX }

// Round trip / single trip (Default selection)
// Gender
// Age
// Spl Cards
// write data into excel and into different tabs

// Each service or operation should have different class and write it to a file
// file operations we need to have a new service 