import calculate from '../routes/Calculator/logic/calculate';

/**
 * @jest-environment jsdom
 */

describe('Testing calculate.js', () => {
  test('Create an empty object with AC button ', () => {
    const buttonName = 'AC';
    const obj = calculate(({ total: '', next: '', operation: '' }), buttonName);
    expect(obj.total).toBe(null);
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe(null);
  });

  test('Test + button ', () => {
    const buttonName = '+';
    const obj = calculate(({ total: '2', next: '3', operation: '+' }), buttonName);
    expect(obj.total).toBe('5');
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe('+');
  });

  test('Test - button ', () => {
    const buttonName = '-';
    const obj = calculate(({ total: '3', next: '2', operation: '-' }), buttonName);
    expect(obj.total).toBe('1');
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe('-');
  });

  test('Test x button ', () => {
    const buttonName = 'x';
    const obj = calculate(({ total: '2', next: '3', operation: 'x' }), buttonName);
    expect(obj.total).toBe('6');
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe('x');
  });

  test('Test ÷ button ', () => {
    const buttonName = '÷';
    const obj = calculate(({ total: '8', next: '2', operation: '÷' }), buttonName);
    expect(obj.total).toBe('4');
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe('÷');
  });

  test('Test division by 0', () => {
    const buttonName = '÷';
    const obj = calculate(({ total: '8', next: '0', operation: '÷' }), buttonName);
    expect(obj.total).toBe("Can't divide by 0.");
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe('÷');
  });

  test('Test % button ', () => {
    const buttonName = '%';
    const obj = calculate(({ total: '8', next: '2', operation: '%' }), buttonName);
    expect(obj.total).toBe('0');
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe('%');
  });

  test('Test % by 0 ', () => {
    const buttonName = '%';
    const obj = calculate(({ total: '8', next: '0', operation: '%' }), buttonName);
    expect(obj.total).toBe("Can't find modulo as can't divide by 0.");
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe('%');
  });

  test('Test +/- button ', () => {
    const buttonName = '+/-';
    let obj = calculate(({ total: '8', next: '2', operation: '+' }), buttonName);
    expect(obj.total).toBe('8');
    expect(obj.next).toBe('-2');
    expect(obj.operation).toBe('+');

    obj = calculate(({ total: '8', next: '', operation: '+' }), buttonName);
    expect(obj.total).toBe('-8');
    expect(obj.next).toBe('');
    expect(obj.operation).toBe('+');
  });

  test('Test = button ', () => {
    const buttonName = '=';
    const obj = calculate(({ total: '8', next: '2', operation: '+' }), buttonName);
    expect(obj.total).toBe('10');
    expect(obj.next).toBe(null);
    expect(obj.operation).toBe(null);
  });
});
