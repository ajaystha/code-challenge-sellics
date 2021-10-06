import styled from 'styled-components';

import { ThemeType } from '@shared/theme';

interface StyledHrProps {
  marginTop?: string | number;
  marginBottom?: string | number;
  theme?: ThemeType;
}

const Divider = styled.hr<StyledHrProps>`
  margin-top: ${({ marginTop }) => marginTop || '1rem'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '1rem'};
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export default Divider;
