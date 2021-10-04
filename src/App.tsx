import { ReactElement } from 'react';

import Container from '@components/styled/Container.styled';
import Divider from '@components/styled/Divider.styled';
import Header from '@components/Header';
import PhotoViewer from '@components/PhotoViewer';

function App(): ReactElement {
  return (
    <div className="App">
      <Container>
        <Header />

        <div style={{ height: 120 }}>selected images</div>

        <Divider />

        <PhotoViewer />
      </Container>
    </div>
  );
}

export default App;
