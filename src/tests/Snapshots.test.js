// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Calculator from '../routes/Calculator/index';
import Home from '../routes/Home';

describe('Snapshot tests for all components', () => {
  it('Should render the calculator component correctly', () => {
    expect(renderer.create(<Calculator />).toJSON()).toMatchSnapshot();
  });
  it('Should render the Home component correctly', () => {
    expect(renderer.create(<Home />).toJSON()).toMatchSnapshot();
  });
});
