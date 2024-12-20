// const { COMMANDS, FAIRS, DISCOUNT_PERCENT, TAX } = require('./CONSTANTS');
// const { MetroStation } = require('./index')


// describe('MetroStation', () => {
//     let metro = new MetroStation();
//     console.log = jest.fn()
//     beforeEach(() => {
//         metro = new MetroStation();
//     });

//     it('should add inital amount to the card', () => {
//         metro.getBalance(['BALANCE', 'TEST1', '200']);
//         expect(metro.cards['TEST1']).toBe(200);
//     });

//     it('should not add the balance for negative amount', () => {
//         metro.getBalance(['BALANCE', 'TEST1', '-1']);
//         expect(metro.cards).toEqual(metro.cards)
//     })

//     it('should proceed with CHECK_IN', () => {
//         metro.getBalance(['BALANCE', 'TEST2', '200']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST2', 'ADULT', 'CENTRAL']);
//         expect(metro.cards['TEST2']).toBe(0);
//         expect(metro.passengerSummary['CENTRAL']['ADULT']).toBe(1);
//         expect(metro.passengerSummary.CENTRAL.amountCollected).toBe(FAIRS.ADULT);
//     })

//     it('should fail if no card member ', () => {
//         metro.getBalance(['BALANCE', 'TEST2', '200']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST3', 'ADULT', 'CENTRAL']);
//         expect(console.log).toHaveBeenCalled();
//     })

//     it('should give discount for return journey', () => {
//         metro.getBalance(['BALANCE', 'TEST2', '400']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST2', 'ADULT', 'AIRPORT']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST2', 'ADULT', 'CENTRAL']);
//         expect(metro.cards['TEST2']).toBe(100);
//     });

//     it('should recharage automatically ', () => {
//         metro.getBalance(['BALANCE', 'TEST2', '200']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST2', 'ADULT', 'AIRPORT']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST2', 'ADULT', 'CENTRAL']);
//         expect(metro.passengerSummary.CENTRAL.amountCollected).toBe(102);
//         expect(metro.passengerSummary.CENTRAL.discount).toBe(100)
//     })

//     it('should get rechared and able to add the tax', () => {
//         metro.getBalance(['BALANCE', 'TEST2', '200']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST2', 'ADULT', 'AIRPORT']);
//         metro.handleCheckIn(['CHECK_IN', 'TEST2', 'ADULT', 'CENTRAL']);
//     })

//     it('should print summary', () => {
//         metro.printSummary()
//         expect(console.log).toHaveBeenCalled();
//     })
// })
