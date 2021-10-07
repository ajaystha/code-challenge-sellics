import { render, screen } from '@testing-library/react';

import Image from '@components/styled/Image.styled';

const testImagePath = '/pictures/test.jpg';

describe('<Image />', () => {
  test('displays image from props', () => {
    render(<Image image={testImagePath} data-testid="styled-image" />);

    const imageStyledComponent = screen.getByTestId('styled-image');

    expect(imageStyledComponent).toHaveStyle(
      `background-image: url(${testImagePath})`
    );
  });
});
