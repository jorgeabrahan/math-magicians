// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import Calculator from '../routes/Calculator/index';

describe('Snapshot tests for all components', () => {
  it('Should render the calculator component correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
