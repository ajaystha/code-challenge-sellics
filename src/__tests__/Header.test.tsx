import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@shared/theme';
import Header from '@components/Header';

describe('<Header />', () => {
  test('shows title', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    const msg = screen.getByText('Image Approval Application');

    expect(msg).toBeInTheDocument();
  });
});
