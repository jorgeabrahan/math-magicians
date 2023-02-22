import operate from '../routes/Calculator/logic/operate.js';

/**
 * @jest-environment jsdom
 */

describe('Testing operate.js', () => {

    test('Test + - ÷ x ', () => {
        const numberOne = '7';
        const numberTwo = '3';
        expect(operate(numberOne, numberTwo, '+')).toBe('10');
        expect(operate(numberOne, numberTwo, '-')).toBe('4');

        let num = parseFloat(operate(numberOne, numberTwo, '÷') );
        expect( num  ).toBeCloseTo(2.333333,6);

        num = parseFloat(operate(numberOne, numberTwo, 'x') );
        expect( num  ).toBe(21);

        num = parseFloat(operate(numberOne, numberTwo, '%') );
        expect( num ).toBe(1);

    });

    test('Special cases', () => {
        const numberOne = '7';
        const numberTwo = '0';
        expect( parseFloat(operate(numberOne, numberTwo, '÷') )  ).toBe(NaN);
        expect( parseFloat(operate(numberOne, numberTwo, '%') )  ).toBe(NaN);
    })
});
