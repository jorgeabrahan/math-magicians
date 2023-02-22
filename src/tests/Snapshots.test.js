// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Calculator from '../routes/Calculator/index';
import Screen from '../routes/Calculator/Screen';
import Number from '../routes/Calculator/Number';
import Symbol from '../routes/Calculator/Symbol';
import Home from '../routes/Home';
import Quote from '../routes/Quote';

describe('Snapshot tests for all components', () => {
  it('Should render the Calculator component correctly', () => {
    expect(renderer.create(<Calculator />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Number component correctly', () => {
    expect(renderer.create(<Number />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Symbol component correctly', () => {
    expect(renderer.create(<Symbol />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Screen component correctly', () => {
    expect(renderer.create(<Screen />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Home component correctly', () => {
    expect(renderer.create(<Home />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Quote component correctly', () => {
    expect(renderer.create(<Quote />).toJSON()).toMatchSnapshot();
  });
});
