import { ReactElement } from 'react';
import styled from 'styled-components';

import { ThemeType } from '@shared/theme';

const StyledHeader = styled.header<{ theme: ThemeType }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
`;

export default function Header(): ReactElement {
  return (
    <StyledHeader>
      <h3>Image Approval Application</h3>
    </StyledHeader>
  );
}
