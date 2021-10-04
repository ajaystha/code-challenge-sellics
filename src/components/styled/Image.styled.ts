import styled from 'styled-components';

interface StyledImageProps {
  image: string | null;
}

const Image = styled.div<StyledImageProps>`
  width: 100%;
  height: 100%;
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 3px;
`;

export default Image;
