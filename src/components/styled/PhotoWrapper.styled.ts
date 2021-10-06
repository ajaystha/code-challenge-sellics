import styled from 'styled-components';

import { ThemeType } from '@shared/theme';

interface PhotoWrapper {
  width?: string;
  height?: string;
  theme?: ThemeType;
}

const PhotoWrapper = styled.div<PhotoWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '350px'};
  background-color: ${({ theme }) => theme.colors.lighterGray};
  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  border-radius: 5px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
`;

export default PhotoWrapper;
