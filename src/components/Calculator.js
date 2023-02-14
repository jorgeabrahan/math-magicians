import Number from './Number';
import Symbol from './Symbol';
import './calculator.css';
import Screen from './Screen';

export default function Calculator() {
  return (
    <main className="center">
      <div className="calculator">
        <Screen />
        <div className="row">
          <Symbol symbol="AC" />
          <Symbol symbol="+/-" />
          <Symbol symbol="%" />
          <Symbol symbol="/" orange />
        </div>

        <div className="row">
          <Number number={7} />
          <Number number={8} />
          <Number number={9} />
          <Symbol symbol="x" orange />
        </div>

        <div className="row">
          <Number number={4} />
          <Number number={5} />
          <Number number={6} />
          <Symbol symbol="-" orange />
        </div>

        <div className="row">
          <Number number={1} />
          <Number number={2} />
          <Number number={3} />
          <Symbol symbol="+" orange />
        </div>

        <div className="row">
          <Number number={0} twoCols />
          <Symbol symbol="." />
          <Symbol symbol="=" orange />
        </div>
      </div>
    </main>
  );
}
