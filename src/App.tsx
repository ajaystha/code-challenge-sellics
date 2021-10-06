import { ReactElement } from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@shared/theme';
import GlobalStyle from '@components/styled/Global.styled';

import Container from '@components/styled/Container.styled';
import Divider from '@components/styled/Divider.styled';
import Header from '@components/Header';
import PhotoViewer from '@components/PhotoViewer';
import ApprovedPhotoViewer from '@components/ApprovedPhotoViewer';

function App(): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <>
        <Container>
          <Header />

          <ApprovedPhotoViewer />

          <Divider />

          <PhotoViewer />
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
