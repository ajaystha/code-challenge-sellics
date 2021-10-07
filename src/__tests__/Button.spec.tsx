import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from '@components/styled/Button.styled';

describe('default <Button />', () => {
  test('correctly renders default button', () => {
    const tree = renderer.create(<Button />).toJSON();

    expect(tree).toHaveStyleRule('background-color', 'transparent');
    expect(tree).toHaveStyleRule('width', 'auto');
    expect(tree).toHaveStyleRule('height', 'auto');
  });
});

describe('custom <Button />', () => {
  test('correctly renders custom button', () => {
    const tree = renderer
      .create(<Button backgroundColor="red" width="10px" height="5px" />)
      .toJSON();

    expect(tree).toHaveStyleRule('background-color', 'red');
    expect(tree).toHaveStyleRule('width', '10px');
    expect(tree).toHaveStyleRule('height', '5px');
  });
});
