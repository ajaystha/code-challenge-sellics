import { ReactElement } from 'react';

import styled from 'styled-components';

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  padding-left: 1rem;
  color: #3b55e6;
  text-transform: uppercase;
  border-bottom: 1px solid #e3e8f0;
`;

export default function Header(): ReactElement {
  return (
    <StyledHeader>
      <h3>Image Approval Application</h3>
    </StyledHeader>
  );
}
