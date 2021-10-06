import { createGlobalStyle } from 'styled-components';

import { ThemeType } from '@shared/theme';

interface GlobalStyleProps {
  theme?: ThemeType;
}

const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.blue};
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyle;
