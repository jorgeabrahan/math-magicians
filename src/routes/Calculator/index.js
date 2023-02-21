import './styles/calculator.css';
import { useState } from 'react';
import Screen from './Screen';
import Number from './Number';
import Symbol from './Symbol';
import calculate from './logic/calculate';

export default function Calculator() {
  const [details, setDetails] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [isLastNumber, setIsLastNumber] = useState(false);
  const handleButtonClick = (buttonName) => {
    setDetails((current) => ({
      ...current,
      ...calculate(details, buttonName.toString().trim()),
    }));
    // Dots should be considered as numbers
    if (buttonName === '.') {
      setIsLastNumber(true);
      return;
    }
    setIsLastNumber(!!buttonName.toString().match(/[0-9]+/));
  };

  const displayValue = () => {
    // If the last button clicked was an operation
    if (!isLastNumber) return details.total;
    // If the last button clicked was '='
    if (details.total !== null && details.next === null && details.operation === null) {
      return details.total;
    }
    // In any other case
    return details.next;
  };
  return (
    <main className="center">
      <div className="calculator">
        <Screen displayValue={displayValue} />
        <div className="row">
          <Symbol symbol="AC" onClick={handleButtonClick} />
          <Symbol symbol="+/-" onClick={handleButtonClick} />
          <Symbol symbol="%" onClick={handleButtonClick} />
          <Symbol symbol="÷" onClick={handleButtonClick} orange />
        </div>

        <div className="row">
          <Number number={7} onClick={handleButtonClick} />
          <Number number={8} onClick={handleButtonClick} />
          <Number number={9} onClick={handleButtonClick} />
          <Symbol symbol="x" onClick={handleButtonClick} orange />
        </div>

        <div className="row">
          <Number number={4} onClick={handleButtonClick} />
          <Number number={5} onClick={handleButtonClick} />
          <Number number={6} onClick={handleButtonClick} />
          <Symbol symbol="-" onClick={handleButtonClick} orange />
        </div>

        <div className="row">
          <Number number={1} onClick={handleButtonClick} />
          <Number number={2} onClick={handleButtonClick} />
          <Number number={3} onClick={handleButtonClick} />
          <Symbol symbol="+" onClick={handleButtonClick} orange />
        </div>

        <div className="row">
          <Number number={0} onClick={handleButtonClick} twoCols />
          <Symbol symbol="." onClick={handleButtonClick} />
          <Symbol symbol="=" onClick={handleButtonClick} orange />
        </div>
      </div>
    </main>
  );
}
