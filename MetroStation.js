const { FAIRS, DISCOUNT_PERCENT, TAX } = require("./CONSTANTS");

class MetroStation {
    constructor() {
        this.cards = {};
        this.ticketPrice = FAIRS;
        this.journey = {};
        this.passengerSummary = this.initializeSummary()
    }

    initializeSummary() {
        return {
            CENTRAL: this.createStationSummary(),
            AIRPORT: this.createStationSummary()
        }
    }

    createStationSummary() {
        return {
            ADULT: 0,
            SENIOR_CITIZEN: 0,
            KID: 0,
            amountCollected: 0,
            discount: 0,
        };
    }

    printStationSummary(element) {
        console.log(
            `TOTAL_COLLECTION ${element} ${this.passengerSummary[element].amountCollected} ${this.passengerSummary[element].discount}`
        );
        const text = [
            this.passengerSummary[element].ADULT &&
            `ADULT ${this.passengerSummary[element].ADULT}`, // 0
            this.passengerSummary[element].SENIOR_CITIZEN &&
            `SENIOR_CITIZEN ${this.passengerSummary[element].SENIOR_CITIZEN}`,
            this.passengerSummary[element].KID &&
            `KID ${this.passengerSummary[element].KID}`,
        ].filter(Boolean);

        console.log(
            `PASSENGER_TYPE_SUMMARY ${text.join(' ')}`
        );
    }

    printSummary() {
        for (const element in this.passengerSummary) {
            this.printStationSummary(element)
        }
    }

    applyCardOperation(commandInfo) {
        const [, member, balance] = commandInfo;
        const amount = parseInt(balance) || 0;
        if (isNaN(amount)) return;
        if (amount < 0) return
        this.cards[member] = (this.cards[member] || 0) + amount;
    }

    handleIsExistingCard(card) {
        return this.cards[card] === undefined
    }

    updatePassengerSummary(station, customer) {
        this.passengerSummary[station][customer] += 1;
    }

    calculateFair(card, customer) {
        return this.journey[card]
            ? (this.ticketPrice[customer] * DISCOUNT_PERCENT) / 100
            : this.ticketPrice[customer];
    }

    handleInsufficientBalance(card, fare, balance, station) {
        const remaining_amount = fare - balance;
        const tax = (remaining_amount * TAX) / 100;
        this.passengerSummary[station].amountCollected += tax;
        this.cards[card] += remaining_amount;
    }

    handleIsExistingCard(card, station, getFair) {
        this.cards[card] -= getFair;
        this.passengerSummary[station].discount += getFair;
        this.passengerSummary[station].amountCollected += getFair;
        delete this.journey[card];
    }

    applyFair(card, station, getFair) {
        this.journey[card] = card;
        this.cards[card] -= getFair;
        this.passengerSummary[station].amountCollected += getFair;
    }

    handleCheckIn(commandInfo) {
        const [, card, customer, station] = commandInfo;

        if (this.handleIsExistingCard(card)) {
            console.log("No Member is registered on this card ", card);
            return;
        }

        this.updatePassengerSummary(station, customer);

        const currentBalance = this.cards[card];

        const getFair = this.calculateFair(card, customer);

        if (currentBalance < getFair) {
            this.handleInsufficientBalance(card, getFair, currentBalance, station)
            return;
        }

        if (this.journey[card]) {
            this.handleIsExistingCard(card, station, getFair)
            return;
        }

        this.applyFair(card, station, getFair)
    }
}

module.exports = { MetroStation }