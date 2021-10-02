import { render } from '@testing-library/react';

import App from './App';

it('should renders app properly', () => {
  const { getByText } = render(<App />);

  const apppage = getByText(/App page/);

  expect(apppage).toBeInTheDocument();
});
