import styled from 'styled-components';

const PhotoButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;

  > button {
    flex: 0 1 45%;
    max-width: 45%;
  }
`;

export default PhotoButtonWrapper;
