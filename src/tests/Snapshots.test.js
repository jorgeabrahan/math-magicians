// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Calculator from '../routes/Calculator/index';
import Home from '../routes/Home';
import Quote from '../routes/Quote';

describe('Snapshot tests for all components', () => {
  it('Should render the calculator component correctly', () => {
    expect(renderer.create(<Calculator />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Home component correctly', () => {
    expect(renderer.create(<Home />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Quote component correctly', () => {
    expect(renderer.create(<Quote />).toJSON()).toMatchSnapshot();
  });
});
