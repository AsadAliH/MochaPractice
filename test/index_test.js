const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
    describe('announceDawn', () => {
        it('returns a rooster call', () => {
        
        //setup
        const expected = 'cock-a-doodle-doo!';

        //exercise
        const actual = Rooster.announceDawn();

        //verify
        assert.equal(actual, expected);
        //teardown 
 
        });
    });

    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            //Setup
            const inputNumber = 12;
            const expected = '12';
            
            //Exercise
            const actual = Rooster.timeAtDawn(inputNumber);

            //Verify
            assert.equal(actual,expected);
        });

        it ('throws a range error if number passed is less than 0', () => {
            //Setup
            const inputNumber = -1;
            const expected = RangeError;

            //Exercise

            //Verify
            assert.throws(() => {
                //Exercise
                Rooster.timeAtDawn(inputNumber);
            }, expected);
        });
        it ('throws a range error if number passed is above 23', () => {
            //Setup
            const inputNumber = 24;
            const expected = RangeError;

            //Exercise

            //Verify
            assert.throws(() => {
                //Exercise
                Rooster.timeAtDawn(inputNumber);
            }, expected);
        });
    });
});