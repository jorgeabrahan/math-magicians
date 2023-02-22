// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Calculator from '../routes/Calculator';

describe('Calculator user interaction tests', () => {
  const calc = userEvent.setup();
  render(<Calculator />);
  const calcScreen = screen.getByTestId('calcScreen');
  const calcNumFour = screen.getByRole('button', { name: '4' });
  const calcNumFive = screen.getByRole('button', { name: '5' });
  const calcSymPlus = screen.getByRole('button', { name: '+' });
  const calcSymMinus = screen.getByRole('button', { name: '-' });
  const calcSymTimes = screen.getByRole('button', { name: 'x' });
  const calcSymEqual = screen.getByRole('button', { name: '=' });
  const calcSymClear = screen.getByRole('button', { name: 'AC' });

  it('Perform multiple calculations through user interaction', async () => {
    /* 4 + 5 */
    await calc.click(calcNumFour);
    await calc.click(calcSymPlus);
    await calc.click(calcNumFive);
    await calc.click(calcSymEqual);
    expect(calcScreen.textContent).toBe('9');
    /* AC */
    await calc.click(calcSymClear);
    expect(calcScreen.textContent).toBe('0');
    /* 5 x 4 */
    await calc.click(calcNumFive);
    await calc.click(calcSymTimes);
    await calc.click(calcNumFour);
    await calc.click(calcSymEqual);
    expect(calcScreen.textContent).toBe('20');
    /* 20 - 5 */
    await calc.click(calcSymMinus);
    await calc.click(calcNumFive);
    await calc.click(calcSymEqual);
    expect(calcScreen.textContent).toBe('15');
    /* AC */
    await calc.click(calcSymClear);
    expect(calcScreen.textContent).toBe('0');
  });
});
